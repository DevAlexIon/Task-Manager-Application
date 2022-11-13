import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../users/entity/user.entity';
import { In, Repository } from 'typeorm';
import { Boards } from './entity/boards.entity';
import { CreateBoardDto } from './entity/dto/CreateBoardDto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Boards) private boardRepository: Repository<Boards>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: UserEntity,
  ): Promise<Boards> {
    const { name, members } = createBoardDto;

    const findUsers = await this.userRepository.find({
      where: {
        email: In(members),
      },
    });

    if (findUsers.length === members.length) {
      const board = this.boardRepository.create({
        name,
        owner: user,
        members: findUsers,
      });
      await this.boardRepository.save(board);
      return board;
    } else {
      throw new NotFoundException('One of the users does not exist');
    }
  }
}
