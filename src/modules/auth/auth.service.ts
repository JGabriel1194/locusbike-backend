import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { customResponse } from 'src/helpers/customResponses';
import { Response } from 'express';
import { checkPassword } from '../../helpers/password';
import { json } from 'sequelize';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto, res: Response) {
    try {
      //Verify if user exist
      const user = await this.usersService.findByEmail(signInDto.userEmail);

      if (!user) {
        return customResponse(res, 404, ['Usuario no encontrado'], null);
      }

      //Verify if password is correct
      const isMatch = await checkPassword(signInDto.userPassword, user.userPassword);

      if (!isMatch) {
        return customResponse(res, 400, ['Contraseña incorrecta'], null);
      }

      //Generate token
      const payload = { username: user.userName, sub: user.id };
      const token = this.jwtService.sign(payload);
      return customResponse(res, 200, ['Login correcto'], { token });
    } catch (error) {
      return customResponse(res, 500, ['Error interno'], error);
    }
  }

  async register(registerDto: any, res: Response) { 
    try {
      //Verify if user exist
      const existUser = await this.usersService.findByEmail(registerDto.userEmail);

      if (existUser) {
        return customResponse(res, 400, ['Usuario ya existe'], null);
      }

      // If not exist, we create the user
      await this.usersService.create(registerDto, res);

    } catch (error) {
      return customResponse(res, 500, ['Error interno'], error);
    }
  } 
}
