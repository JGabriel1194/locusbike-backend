import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { Response } from 'express';

@Injectable()
export class MailService {

  constructor(private mailerService: MailerService) {}

  async sendUserConfirmationEmail(res: Response, createMailDto: CreateMailDto, token: string) {
    try {
      const url = `${process.env.HOST_NAME}/confirm/${token}`;

      const sendMail = await this.mailerService.sendMail({
        to: createMailDto.userEmail,
        subject: 'Welcome to LocusBike! Confirm your account',
        template: './confirmation',
        context: {
          name: createMailDto.userName,
          url,
        },
      });
      if (!sendMail) {
        return customResponse(false, res, 400, 'No se a podido enviar el correo de confirmación', null);
      }
      return customResponse(true, res, 200, 'Se a enviado un correo de confirmación revisa tu bandeja de entrada', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
  }
}
