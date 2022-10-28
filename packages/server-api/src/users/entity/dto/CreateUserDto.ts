import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty() fullName: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() @IsEmail() email: string;
}
