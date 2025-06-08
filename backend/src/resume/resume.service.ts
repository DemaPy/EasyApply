import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ResumeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(resume: Prisma.ResumeCreateInput) {
    const allRecords = await this.prisma.resume.findMany();
    if (allRecords.length > 10) {
      return allRecords;
    }
    return this.prisma.resume.create({
      data: resume,
    });
  }

  async get(id: Prisma.ResumeCreateInput['id']) {
    return this.prisma.resume.findUnique({
      where: {
        id,
      },
    });
  }

  async getAll() {
    return this.prisma.resume.findMany();
  }
}
