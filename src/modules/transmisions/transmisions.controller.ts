import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransmisionsService } from './transmisions.service';
import { CreateTransmisionDto } from './dto/create-transmision.dto';
import { UpdateTransmisionDto } from './dto/update-transmision.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('transmissions')
@ApiBearerAuth()
@Controller('transmisions')
export class TransmisionsController {
  constructor(private readonly transmisionsService: TransmisionsService) {}

  @Post()
  create(@Body() createTransmisionDto: CreateTransmisionDto) {
    return this.transmisionsService.create(createTransmisionDto);
  }

  @Get()
  findAll() {
    return this.transmisionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transmisionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransmisionDto: UpdateTransmisionDto) {
    return this.transmisionsService.update(+id, updateTransmisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transmisionsService.remove(+id);
  }
}
