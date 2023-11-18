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
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private mailService: MailService,
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
      const token = await this.generateJwt(res, user.id, user.userName);
      return customResponse(true,res, 200, 'Login correcto', { token });
    } catch (error) {
      return badResponse(res);
    }
  }

  async register(res: Response,registerDto: RegisterDto, userImage: Express.Multer.File) { 
    try {
      console.log('registerDto',registerDto)

      //Verify if user exist
      const existUser = await this.userModel.findOne({
        where: { userEmail: registerDto.userEmail },
      });

      if (existUser) {
        return customResponse(false,res,400, `El usuario con este correo ${existUser.userEmail} ya esta registrado`, null);
      }

      // If not exist, we create the user
      registerDto.userImage = `${process.env.HOSTNAME}/uploads/images/${userImage.filename}`;
      const newUser = await this.usersService.create(res, registerDto);

      //Generate token
      if(newUser){
        const token = await this.generateJWTWhiteTime(res, {id:newUser.id, userName:newUser.userName},'7d');
        if(token){
          console.log('token',token)
          const sendEmail = {
            userName: newUser.userName,
            userEmail: newUser.userEmail,
          }
          await this.mailService.sendUserConfirmationEmail(res,sendEmail,token);
        }
      }else{
        return customResponse(false,res, 400, 'No se pudo crear el usuario', null);
      }

      

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

  async verify(token: string) {
    try {
      const data = await this.decodeJWT(token);
      console.log('data',data)
      const user = await this.userModel.findOne({ where: { id: data['object'].id } });
      if(!user){
        return false;
      }
      user.isActive = true;
      await user.save();
      return true
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(error);
    }
  }

  /**
   * generate a jwt
   * 
   * @param res response
   * @param id id of user
   * @param userName user name
   * @returns 
   */
  async generateJwt(res: Response, id: number, userName: string) {
    try {
      const payload = { id, userName };
      const token = this.jwtService.sign(payload);
      return token;
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  async generateJWTWhiteTime(res: Response,object:{},time:string | number | undefined) {
    try {
      const payload = {object};
      const token = this.jwtService.sign(payload,{ expiresIn: time});
      return token;
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  async decodeJWT(payload: string) {
    try {
      const data = this.jwtService.decode(payload);
      return data;
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(error);
    }
  }

  async verifyJWT(token: string) {
    try {
      const data = this.jwtService.verify(token);
      return data;
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(error);
    }
  }
}
