import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { customResponse } from 'src/helpers/customResponse';
import { Response } from 'express';
import { checkPassword } from '../../helpers/password';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto, res: Response) {
    try {
      //Verify if user exist
      const user = await this.usersService.findOneByUserName(
        signInDto.username,
      );

      if (!user) {
        return customResponse(res, 404, 'Usuario no encontrado', null);
      }

      //Verify if password is correct
      const isMatch = await checkPassword(signInDto.password, user.password);

      if (!isMatch) {
        return customResponse(res, 400, 'Contraseña incorrecta', null);
      }

      //Generate token
      const payload = { username: user.userName, sub: user.id };
      const token = this.jwtService.sign(payload);
      return customResponse(res, 200, 'Login correcto', { token });
    } catch (error) {
      return customResponse(res, 500, 'Error interno', error);
    }
  }
}
