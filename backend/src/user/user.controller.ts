import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
