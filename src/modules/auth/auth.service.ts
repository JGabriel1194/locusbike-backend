import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { Response } from 'express';
import { checkPassword} from '../../helpers/password';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async signIn(res: Response, signInDto: SignInDto) {
    try {
      //Verify if user exist
      const user = await this.userModel.findOne({ where: {userEmail:signInDto.userEmail}});

      if (!user) {
        return customResponse(false,res, 404, 'Usuario no encontrado', null);
      }

      //Verify if password is correct
      const isMatch = await checkPassword(signInDto.userPassword, user.userPassword);

      if (!isMatch) {
        return customResponse(false,res, 400, 'Contraseña incorrecta', null);
      }

      //Generate token
      const payload = { username: user.userName, sub: user.id };
      const token = this.jwtService.sign(payload);
      return customResponse(true,res, 200, 'Login correcto', { token });
    } catch (error) {
      return badResponse(res);
    }
  }

  async register(res: Response,registerDto: any) { 
    try {
      //Verify if user exist
      const existUser = await this.userModel.findOne({
        where: { userEmail: registerDto.userEmail },
      });

      if (existUser) {
        return customResponse(false,res,400, 'Usuario ya existe', null);
      }

      // If not exist, we create the user
      // If not exist, we create the user
      await this.usersService.create(res, registerDto);

    } catch (error) {
      return badResponse(res);
    }
  } 
}
