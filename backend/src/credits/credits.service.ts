import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class CreditsService {
  constructor(private readonly prisma: PrismaService) {}

  async getBalance(userId: string) {
    return await this.prisma.userBalance.findUnique({
      where: {
        userId,
      },
    });
  }
}
