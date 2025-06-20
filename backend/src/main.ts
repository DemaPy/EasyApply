import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.use(cookieParser());

  app.enableCors({
    origin: [process.env.ORIGIN, process.env.ORIGIN_OPTIONS],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
