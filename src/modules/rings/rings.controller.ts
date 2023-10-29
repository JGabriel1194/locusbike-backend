import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RingsService } from './rings.service';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('rings')
@ApiBearerAuth()
@Controller('rings')
export class RingsController {
  constructor(private readonly ringsService: RingsService) {}

  @Post()
  create(@Body() createRingDto: CreateRingDto) {
    return this.ringsService.create(createRingDto);
  }

  @Get()
  findAll() {
    return this.ringsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ringsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRingDto: UpdateRingDto) {
    return this.ringsService.update(+id, updateRingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ringsService.remove(+id);
  }
}
