import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import type { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

interface RequestWithCookies extends Request {
  cookies: {
    Authentication: string;
    Refresh: string;
  };
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    const extractors = [
      (request: RequestWithCookies) => request.cookies.Authentication,
    ];
    super({
      secretOrKey: configService.get<string>('ACCESS_TOKEN_SECRET')!,
      jwtFromRequest: ExtractJwt.fromExtractors(extractors),
      ignoreExpiration: false,
    });
  }

  async validate(payload: { email: string }) {
    const user = await this.userService.findOneByEmail(payload.email);
    return user;
  }
}
