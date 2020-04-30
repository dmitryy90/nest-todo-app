import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

class userCreds {
  @ApiProperty() 
  public username: string;

  @ApiProperty()
  public password: string;
}

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() Body: userCreds, @Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
