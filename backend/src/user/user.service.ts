import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: User) {
    return this.prisma.user.create({
      data: {
        provider: 'email',
        email: createUserDto.email,
        name: createUserDto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async updateByEmail(email: string, data: Prisma.UserUpdateArgs['data']) {
    return this.prisma.user.update({ where: { email }, data });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOneByIdentifierOrThrow(identifier: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: identifier },
      include: { secrets: true },
    });

    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { email: email },
      include: { secrets: true },
    });

    if (!user.secrets) {
      throw new InternalServerErrorException('Secrets not found');
    }

    return user;
  }
}
