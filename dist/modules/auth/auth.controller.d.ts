import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { GoogleDto } from './dto/google.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto, res: Response): Promise<void>;
    register(registerDto: RegisterDto, res: Response): Promise<void>;
    googleSignIn(googleDto: GoogleDto, res: Response): Promise<void>;
}
