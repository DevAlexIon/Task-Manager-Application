import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from '../users/entity/dto/LoginUserDto';
import { CreateUserDto } from '../users/entity/dto/CreateUserDto';
import { AuthService } from './auth.service';

export interface RegistrationStatus {
  success: boolean;
  message: string;
}

export interface LoginStatus {
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

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('protected')
  validateUser(): string {
    return 'Hello World!';
  }
}
