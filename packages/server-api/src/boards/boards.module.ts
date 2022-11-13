import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserEntity } from '../users/entity/user.entity';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Boards } from './entity/boards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Boards, UserEntity]), AuthModule],
  providers: [BoardsService],
  controllers: [BoardsController],
})
export class BoardsModule {}
