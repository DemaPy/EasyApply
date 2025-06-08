import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { PrismaService } from 'src/database/database.service';
import { UserService } from 'src/user/user.service';
import { creditsPurchase, verifyEmail } from './templates';
import { CreditsPackType } from 'src/types';

@Injectable()
export class MailServcie {
  constructor(
    private readonly mailerService: MailerService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async sendEmail(options: ISendMailOptions) {
    await this.mailerService.sendMail(options);
  }

  generateToken(tokenType: 'verification') {
    if (tokenType === 'verification') {
      return randomBytes(32).toString('base64url');
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

      const verificationUrl = `http://localhost:5173/auth/verify-email?token=${token}`;

      await this.mailerService.sendMail({
        to: email,
        subject: `Confirm Your Email: ${email}`,
        html: verifyEmail({
          email,
          verificationUrl,
        }),
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async sendConfirmationCreditsEmail(
    options: Omit<ISendMailOptions, 'html'> & { pack: CreditsPackType },
  ) {
    const template = creditsPurchase({ pack: options.pack });
    await this.sendEmail({ ...options, html: template });
  }
}
