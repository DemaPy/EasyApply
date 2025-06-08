import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { randomBytes } from 'crypto';
import { PrismaService } from 'src/database/database.service';
import { MailServcie } from 'src/mail/mail.service';
import { RegisterDTO } from 'src/utils/lib/dto/auth';
import * as bcryptjs from 'bcryptjs';
import { UserService } from 'src/user/user.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UserWithSecrets } from 'src/utils/lib/dto/user';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly mailService: MailServcie,
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validatePassword(passpord: string, hashedPassword: string) {
    const isValid = await bcryptjs.compare(passpord, hashedPassword);
    if (!isValid) {
      throw new BadRequestException('Invalid credentials');
    }
  }

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userService.findOneByIdentifierOrThrow(email);
      if (!user) {
        throw new BadRequestException();
      }

      await this.validatePassword(password, user.secrets!.password!);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { secrets, ...rest } = user;
      return rest;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async setRefreshToken(email: string, token: string | null) {
    await this.userService.updateByEmail(email, {
      secrets: {
        update: {
          refreshToken: token,
        },
      },
    });
  }

  private async exchangeToken(email: string) {
    try {
      const accessToken = this.generateToken('access', { email });
      const refreshToken = this.generateToken('refresh', { email });

      // Set Refresh Token in Database
      await this.setRefreshToken(email, refreshToken!);

      return { accessToken, refreshToken };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private hash(password: RegisterDTO['password']) {
    return bcryptjs.hash(password, 10);
  }

  async login(user: UserWithSecrets) {
    const tokens = await this.exchangeToken(user.email);
    return tokens;
  }

  async register(registerDTO: RegisterDTO) {
    const hashedPassword = await this.hash(registerDTO.password);

    try {
      const user = await this.prismaService.user.create({
        data: {
          provider: 'email',
          name: registerDTO.name,
          email: registerDTO.email,
          secrets: {
            create: { password: hashedPassword },
          },
        },
      });

      // Ignore email service to send verification email
      void this.sendVerificationEmail(user.email);
      const tokens = await this.exchangeToken(user.email);
      return { ...tokens, user };
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('User already exist');
      }

      throw new InternalServerErrorException();
    }
  }

  generateToken(
    tokenType: 'access' | 'refresh' | 'verification' | 'reset',
    payload?: { email: string },
  ) {
    if (tokenType === 'verification' || tokenType === 'reset') {
      return randomBytes(32).toString('base64url');
    }

    if (tokenType === 'access') {
      if (!payload) {
        throw new InternalServerErrorException('InvalidTokenPayload');
      }
      return this.jwtService.sign(payload, {
        secret: this.configService.getOrThrow('ACCESS_TOKEN_SECRET'),
        expiresIn: '15m',
      });
    }

    if (tokenType === 'refresh') {
      if (!payload) {
        throw new InternalServerErrorException('InvalidTokenPayload');
      }
      return this.jwtService.sign(payload, {
        secret: this.configService.getOrThrow('REFRESH_TOKEN_SECRET'),
        expiresIn: '2d',
      });
    }
  }

  async sendVerificationEmail(email: string) {
    try {
      const token = this.generateToken('verification');

      await this.userService.updateByEmail(email, {
        secrets: {
          update: { verificationToken: token },
        },
      });

      await this.mailService.sendVerificationEmail(email);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async verifyEmail(id: string, token: string) {
    try {
      const userDB = await this.prismaService.user.findUnique({
        where: { id },
        include: {
          secrets: {
            select: {
              verificationToken: true,
            },
          },
        },
      });

      const tokenDB = userDB?.secrets?.verificationToken;

      if (!tokenDB || tokenDB !== token) {
        throw new BadRequestException('Token verification invalid');
      }

      await this.prismaService.user.update({
        where: { id },
        data: {
          emailVerified: true,
          secrets: { update: { verificationToken: null } },
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException();
      }

      throw new InternalServerErrorException(error);
    }
  }
}
