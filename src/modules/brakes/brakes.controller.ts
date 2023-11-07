import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { BrakesService } from './brakes.service';
import { CreateBrakeDto } from './dto/create-brake.dto';
import { UpdateBrakeDto } from './dto/update-brake.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('brakes')
@ApiBearerAuth()
@Controller('brakes')
export class BrakesController {
  constructor(private readonly brakesService: BrakesService) {}

  @Post()
  create(@Res() res: Response, @Body() createBrakeDto: CreateBrakeDto) {
    return this.brakesService.create(res,createBrakeDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.brakesService.findAll(res);
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param('id') id: string) {
    return this.brakesService.findOne(res,+id);
  }

  @Patch(':id')
  update(@Res() res: Response, @Param('id') id: string, @Body() updateBrakeDto: UpdateBrakeDto) {
    return this.brakesService.update(res,+id, updateBrakeDto);
  }

  @Delete(':id')
  remove(@Res() res: Response, @Param('id') id: string) {
    return this.brakesService.remove(res,+id);
  }
}
