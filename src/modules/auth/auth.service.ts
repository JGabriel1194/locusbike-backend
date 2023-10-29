import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { Response } from 'express';
import { checkPassword} from '../../helpers/password';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/modules/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { googleVerify } from 'src/helpers/google-verify';
import { GoogleDto } from './dto/google.dto';

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

  async register(res: Response,registerDto: RegisterDto) { 
    try {
      console.log('registerDto',registerDto)
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

  async loginGoogle(res: Response,googleDto: GoogleDto) {
    try {
      const googleUser = await googleVerify(googleDto.googleToken);
      if (!googleUser) {
        return customResponse(false,res, 400, 'Token de google no es válido', null);
      }
      const user = await this.userModel.findOne({ where: { userEmail: googleUser.email } });

      let newUser;
      if(!user){
        newUser = await this.usersService.create(res, {
          userName: googleUser.name,
          userEmail: googleUser.email,
          userPassword: '123456',
          userCedula: '123456789',
          userPhone: '123456789',
          userImage: googleUser.picture,
          userAddres: 'Calle 123',
          isActive: true,
        });
        const payload = { username: newUser.userName, sub: newUser.id };
        const token = this.jwtService.sign(payload);
        return customResponse(true,res, 200, 'Login correcto', { token });
      }

      //Generate token
      const payload = { username: user.userName, sub: user.id };
      const token = this.jwtService.sign(payload);
      return customResponse(true,res, 200, 'Login correcto', { token });
      
    } catch (error) {
      
    }
  }
}
