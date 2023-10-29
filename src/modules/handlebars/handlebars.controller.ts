import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HandlebarsService } from './handlebars.service';
import { CreateHandlebarDto } from './dto/create-handlebar.dto';
import { UpdateHandlebarDto } from './dto/update-handlebar.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('handlebars')
@ApiBearerAuth()
@Controller('handlebars')
export class HandlebarsController {
  constructor(private readonly handlebarsService: HandlebarsService) {}

  @Post()
  create(@Body() createHandlebarDto: CreateHandlebarDto) {
    return this.handlebarsService.create(createHandlebarDto);
  }

  @Get()
  findAll() {
    return this.handlebarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handlebarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHandlebarDto: UpdateHandlebarDto) {
    return this.handlebarsService.update(+id, updateHandlebarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handlebarsService.remove(+id);
  }
}
