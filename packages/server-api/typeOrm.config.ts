import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UserEntity } from './src/users/entity/user.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USERNAME'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [UserEntity],
  migrations: ['./migrations/**/*{.ts,.js}'],
});
