import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from './entity/dto/UserDto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './entity/dto/CreateUserDto';
import { UserDto } from './entity/dto/UserDto';
import { UserEntity } from './entity/user.entity';
import { LoginUserDto } from './entity/dto/LoginUserDto';
import { EncryptService } from '../auth/utils/encrypt.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private encryptService: EncryptService,
  ) {}

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { username, email } = userDto;
    const password = await this.encryptService.encrypt(userDto.password);
    const user: UserEntity = this.userRepo.create({
      username,
      password,
      email,
    });
    await this.userRepo.save(user);
    return toUserDto(user);
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = this.encryptService.comparePasswords(
      password,
      user.password,
    );

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ username }: any): Promise<UserDto> {
    return username;
  }
}
