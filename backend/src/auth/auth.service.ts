import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.userService.create({
      name: dto.name,
      email: dto.email,
      password: hashed,
    });

    const { password, ...rest } = user;
    return {
      user: plainToInstance(User, rest),
      message: 'User registered successfully',
    };
  }

  async login(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid email or password');

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    const { password, ...rest } = user;
    return {
      user: plainToInstance(User, rest),
      token,
      message: 'Login successful',
    };
  }
}
