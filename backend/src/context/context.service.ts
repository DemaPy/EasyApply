import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ContextService {
  constructor(private readonly prisma: PrismaService) {}

  async create(context: Prisma.ContextCreateInput) {
    const allRecords = await this.prisma.context.findMany();
    if (allRecords.length > 10) {
      return allRecords;
    }
    return this.prisma.context.create({
      data: context,
    });
  }

  async get(id: Prisma.ContextCreateInput['id']) {
    return this.prisma.context.findUnique({
      where: {
        id,
      },
    });
  }

  async getAll() {
    return this.prisma.context.findMany();
  }
}
