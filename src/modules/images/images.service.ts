import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {

  constructor(
    @InjectModel(Image)
    private imageModel: typeof Image
  ){}
  async create(createImageDto: CreateImageDto) {
    try {
      const image = await this.imageModel.create(createImageDto)
      return image
    } catch (error) {
      
    }
    return 'This action adds a new image';
  }

  findAll() {
    return `This action returns all images`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
