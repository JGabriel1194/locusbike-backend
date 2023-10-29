import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedalsService } from './pedals.service';
import { CreatePedalDto } from './dto/create-pedal.dto';
import { UpdatePedalDto } from './dto/update-pedal.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('pedals')
@ApiBearerAuth()
@Controller('pedals')
export class PedalsController {
  constructor(private readonly pedalsService: PedalsService) {}

  @Post()
  create(@Body() createPedalDto: CreatePedalDto) {
    return this.pedalsService.create(createPedalDto);
  }

  @Get()
  findAll() {
    return this.pedalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedalDto: UpdatePedalDto) {
    return this.pedalsService.update(+id, updatePedalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedalsService.remove(+id);
  }
}
