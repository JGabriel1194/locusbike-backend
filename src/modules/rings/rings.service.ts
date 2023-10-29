import { Injectable } from '@nestjs/common';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';

@Injectable()
export class RingsService {
  create(createRingDto: CreateRingDto) {
    return 'This action adds a new ring';
  }

  findAll() {
    return `This action returns all rings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ring`;
  }

  update(id: number, updateRingDto: UpdateRingDto) {
    return `This action updates a #${id} ring`;
  }

  remove(id: number) {
    return `This action removes a #${id} ring`;
  }
}
