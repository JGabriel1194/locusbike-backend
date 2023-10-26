import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './modules/auth/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  @Render('home')
  root(){
    return {message: 'Hello world'}
  }
}
