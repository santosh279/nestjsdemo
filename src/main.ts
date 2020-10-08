import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

/** Logger */
import { Logger } from '@nestjs/common';

/**
 * Import .env and assign the port
 */
import 'dotenv/config';
const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(PORT);
  Logger.log(`About me NEST SERVER is running on port: ${PORT}`);
}
bootstrap();
