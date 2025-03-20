import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassThrough } from 'stream';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register (@Body('username') username: string, @Body('password') password: string){
        return this.authService.register(username, password);
    }
    @Post('login')
    async login (@Body('username') username: string, @Body('password') password: string){
        return this.authService.login(username, password)
    }
}