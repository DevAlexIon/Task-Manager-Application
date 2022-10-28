import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { UserEntity } from '../user.entity';

export class UserDto {
  @IsNotEmpty() id: number;
  @IsNotEmpty() fullName: string;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() @Exclude() password: string;
}

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, fullName, email } = data;
  const userDto: UserDto = {
    id,
    fullName,
    email,
    password: '',
  };
  return userDto;
};
