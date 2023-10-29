import { Injectable } from '@nestjs/common';
import { CreateBrakeDto } from './dto/create-brake.dto';
import { UpdateBrakeDto } from './dto/update-brake.dto';

@Injectable()
export class BrakesService {
  create(createBrakeDto: CreateBrakeDto) {
    return 'This action adds a new brake';
  }

  findAll() {
    return `This action returns all brakes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brake`;
  }

  update(id: number, updateBrakeDto: UpdateBrakeDto) {
    return `This action updates a #${id} brake`;
  }

  remove(id: number) {
    return `This action removes a #${id} brake`;
  }
}
