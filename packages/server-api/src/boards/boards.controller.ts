import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardsService } from './boards.service';
import { Boards } from './entity/boards.entity';
import { CreateBoardDto } from './entity/dto/CreateBoardDto';
import { UserEntity } from '../users/entity/user.entity';

@Controller('boards')
@UseGuards(AuthGuard('jwt'))
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post()
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    user: UserEntity,
  ): Promise<Boards> {
    return this.boardsService.createBoard(createBoardDto, user);
  }
}
