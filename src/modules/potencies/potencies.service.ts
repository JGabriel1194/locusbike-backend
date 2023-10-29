import { Injectable } from '@nestjs/common';
import { CreatePotencyDto } from './dto/create-potency.dto';
import { UpdatePotencyDto } from './dto/update-potency.dto';

@Injectable()
export class PotenciesService {
  create(createPotencyDto: CreatePotencyDto) {
    return 'This action adds a new potency';
  }

  findAll() {
    return `This action returns all potencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} potency`;
  }

  update(id: number, updatePotencyDto: UpdatePotencyDto) {
    return `This action updates a #${id} potency`;
  }

  remove(id: number) {
    return `This action removes a #${id} potency`;
  }
}
