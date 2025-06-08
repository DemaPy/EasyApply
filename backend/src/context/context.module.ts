import { Module } from '@nestjs/common';
import { ContextService } from './context.service';
import { ContextController } from './context.controller';
import { PrismaModule } from 'src/database/database.module';

@Module({
  imports: [PrismaModule],
  providers: [ContextService],
  controllers: [ContextController],
})
export class ContextModule {}
