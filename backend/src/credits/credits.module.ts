import { Module } from '@nestjs/common';
import { CreditsController } from './credits.controller';
import { CreditsService } from './credits.service';
import { PrismaModule } from 'src/database/database.module';

@Module({
  imports: [PrismaModule],
  controllers: [CreditsController],
  providers: [CreditsService],
})
export class CreditsModule {}
