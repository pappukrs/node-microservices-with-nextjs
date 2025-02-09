import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/products'); // Set a global prefix for all routes
  await app.listen(process.env.PORT || 4000);
  console.log(`Product Service running on port ${process.env.PORT || 4000}`);
}
bootstrap();
