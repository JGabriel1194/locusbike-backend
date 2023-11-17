import { SignInDto } from './dto/signin.dto';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from 'src/modules/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { GoogleDto } from './dto/google.dto';
export declare class AuthService {
    private jwtService;
    private usersService;
    private userModel;
    constructor(jwtService: JwtService, usersService: UsersService, userModel: typeof User);
    signIn(res: Response, signInDto: SignInDto): Promise<void>;
    register(res: Response, registerDto: RegisterDto): Promise<void>;
    loginGoogle(res: Response, googleDto: GoogleDto): Promise<void>;
}
