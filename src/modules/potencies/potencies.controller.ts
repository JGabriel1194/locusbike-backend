import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PotenciesService } from './potencies.service';
import { CreatePotencyDto } from './dto/create-potency.dto';
import { UpdatePotencyDto } from './dto/update-potency.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('potencies')
@ApiBearerAuth()
@Controller('potencies')
export class PotenciesController {
  constructor(private readonly potenciesService: PotenciesService) {}

  @Post()
  create(@Body() createPotencyDto: CreatePotencyDto) {
    return this.potenciesService.create(createPotencyDto);
  }

  @Get()
  findAll() {
    return this.potenciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.potenciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePotencyDto: UpdatePotencyDto) {
    return this.potenciesService.update(+id, updatePotencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.potenciesService.remove(+id);
  }
}
