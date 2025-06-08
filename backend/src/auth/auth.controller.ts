import { Body, Controller, Post, Query, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from 'src/utils/lib/dto/auth';
import { responseObject } from 'src/utils/lib';
import { getCookieOptions } from 'src/utils/cookie';
import type { Response } from 'express';
import { User } from 'src/user/decorators/user.decorator';
import { UserWithSecrets } from 'src/utils/lib/dto/user';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(
    @User() user: UserWithSecrets,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken, refreshToken } = await this.authService.login(user);

    response.cookie('Authentication', accessToken, getCookieOptions('access'));
    response.cookie('Refresh', refreshToken, getCookieOptions('refresh'));
    response.status(200).send(responseObject({ data: user }));
  }

  @Post('register')
  async register(
    @Body() registerDTO: RegisterDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken, refreshToken, user } =
      await this.authService.register(registerDTO);

    response.cookie('Authentication', accessToken, getCookieOptions('access'));
    response.cookie('Refresh', refreshToken, getCookieOptions('refresh'));
    response.status(200).send(responseObject({ data: user }));
  }

  @Post('verify-email')
  async verifyEmail(
    @User() user: UserWithSecrets,
    @Query('token') token: string,
  ) {
    await this.authService.verifyEmail(user.id, token);

    return responseObject({
      data: { message: 'Your email has been verified.' },
    });
  }
}
