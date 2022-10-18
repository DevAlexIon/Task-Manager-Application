import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [process.env.ORIGIN, process.env.ORIGIN2],
      credentials: true,
    },
  });
  await app.listen(process.env.PORT);
  app.use(helmet());
  app.use(helmet.frameguard({ action: 'deny' }));
}
bootstrap();
