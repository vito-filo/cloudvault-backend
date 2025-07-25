import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingMiddleware } from './middleware/logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Removes unexpected fields
      forbidNonWhitelisted: true, // Throw an error for unexpected fields]
      disableErrorMessages: true,
    }),
  );
  app.use(new LoggingMiddleware().use);

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(','),
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
