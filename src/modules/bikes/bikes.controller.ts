import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('bikes')
@ApiBearerAuth()
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Post()
  create(@Res() res: Response, @Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(res,createBikeDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.bikesService.findAll(res);
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param('id') id: string) {
    return this.bikesService.findOne(res,+id);
  }

  @Patch(':id')
  update(@Res() res: Response, @Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikesService.update(res,+id, updateBikeDto);
  }

  @Delete(':id')
  remove(@Res() res: Response,@Param('id') id: string) {
    return this.bikesService.remove(res,+id);
  }
}
