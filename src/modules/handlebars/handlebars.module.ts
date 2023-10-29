import { Module } from '@nestjs/common';
import { HandlebarsService } from './handlebars.service';
import { HandlebarsController } from './handlebars.controller';

@Module({
  controllers: [HandlebarsController],
  providers: [HandlebarsService]
})
export class HandlebarsModule {}
