import { Injectable } from '@nestjs/common';
import { CreatePedalDto } from './dto/create-pedal.dto';
import { UpdatePedalDto } from './dto/update-pedal.dto';

@Injectable()
export class PedalsService {
  create(createPedalDto: CreatePedalDto) {
    return 'This action adds a new pedal';
  }

  findAll() {
    return `This action returns all pedals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedal`;
  }

  update(id: number, updatePedalDto: UpdatePedalDto) {
    return `This action updates a #${id} pedal`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedal`;
  }
}
