import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile, Render } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Public } from './auth.decorator';
import { GoogleDto } from './dto/google.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    return this.authService.signIn(res, signInDto);
  }

  @Public()
  @Post('register')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('userImage', {
      storage: diskStorage({
        destination: './public/uploads/images',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const fileName = `${uniqueSuffix}${ext}`;
          return callback(null, fileName);
        },
      }),
    }),
  )
  register(@Body() registerDto: RegisterDto, @Res() res: Response,@UploadedFile() userImage: Express.Multer.File) {
    console.log(registerDto);
    return this.authService.register(res, registerDto, userImage);
  }

  @Public()
  @Post('google')
  googleSignIn(@Body() googleDto: GoogleDto, @Res() res: Response) {
    return this.authService.loginGoogle(res, googleDto);
  }
  
  @Public()
  @Get('verify/:token')
  async verify(@Param('token') token: string, @Res() res: Response) {
    const verify = await this.authService.verify(res,token);
    if (verify) {
      return res.render('verify', { msg: 'Usuario verificado' });
    }else{
      return res.render('verify', { msg: 'No se a podido verificar su usuario' });
    }
  }
}
