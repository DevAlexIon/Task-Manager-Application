import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from './entity/dto/UserDto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './entity/dto/CreateUserDto';
import { UserDto } from './entity/dto/UserDto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { fullName, password, email } = userDto;

    const user: UserEntity = this.userRepo.create({
      fullName,
      password,
      email,
    });
    await this.userRepo.save(user);
    return toUserDto(user);
  }
}
