import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/entity/dto/CreateUserDto';
import { AuthService } from './auth.service';

export interface RegistrationStatus {
  success: boolean;
  message: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    );
    return result;
  }
}
