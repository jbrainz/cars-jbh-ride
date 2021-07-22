import { NestFactory, BaseExceptionFilter } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BaseExceptionFilter());
  await app.listen(process.env.PORT);
}
bootstrap();
