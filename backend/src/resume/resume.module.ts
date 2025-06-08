import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/database.module';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

@Module({
  imports: [PrismaModule],
  providers: [ResumeService],
  controllers: [ResumeController],
})
export class ResumeModule {}
