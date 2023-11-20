import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Image } from './entities/image.entity';


@Module({
  imports:[SequelizeModule.forFeature([Image])],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
