import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UsersService } from './users.service';
import { EncryptService } from '../auth/utils/encrypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, EncryptService],
  exports: [UsersService],
})
export class UsersModule {}
