import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { UserWithSecrets } from 'src/utils/lib/dto/user';

export const User = createParamDecorator(
  (userKeys: keyof UserWithSecrets | undefined, ctx: ExecutionContext) => {
    const req: Request & { authorization: string } = ctx
      .switchToHttp()
      .getRequest();
    const user = req.user as UserWithSecrets;

    return userKeys ? user[userKeys] : user;
  },
);
