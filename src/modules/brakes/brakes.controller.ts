import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrakesService } from './brakes.service';
import { CreateBrakeDto } from './dto/create-brake.dto';
import { UpdateBrakeDto } from './dto/update-brake.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('brakes')
@ApiBearerAuth()
@Controller('brakes')
export class BrakesController {
  constructor(private readonly brakesService: BrakesService) {}

  @Post()
  create(@Body() createBrakeDto: CreateBrakeDto) {
    return this.brakesService.create(createBrakeDto);
  }

  @Get()
  findAll() {
    return this.brakesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brakesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrakeDto: UpdateBrakeDto) {
    return this.brakesService.update(+id, updateBrakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brakesService.remove(+id);
  }
}
