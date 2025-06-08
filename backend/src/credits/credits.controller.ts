import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { CreditsService } from './credits.service';
import { responseObject } from 'src/utils/lib';

@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Get(':userId')
  async getBalance(@Param() params: { userId: string }) {
    try {
      const userId = params?.userId;
      if (!userId) {
        throw new Error('User id required');
      }
      const userData = await this.creditsService.getBalance(userId);
      return responseObject({
        data: userData?.credits ?? 0,
      });
    } catch (error: unknown) {
      console.log('Failed to get user balance', error);
      throw new InternalServerErrorException('Failed to get user balance');
    }
  }
}
