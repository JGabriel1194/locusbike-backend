import { Injectable } from '@nestjs/common';
import { CreateHandlebarDto } from './dto/create-handlebar.dto';
import { UpdateHandlebarDto } from './dto/update-handlebar.dto';

@Injectable()
export class HandlebarsService {
  create(createHandlebarDto: CreateHandlebarDto) {
    return 'This action adds a new handlebar';
  }

  findAll() {
    return `This action returns all handlebars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} handlebar`;
  }

  update(id: number, updateHandlebarDto: UpdateHandlebarDto) {
    return `This action updates a #${id} handlebar`;
  }

  remove(id: number) {
    return `This action removes a #${id} handlebar`;
  }
}
