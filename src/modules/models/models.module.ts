import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Modelo } from './entities/model.entity';

@Module({
  imports:[SequelizeModule.forFeature([Modelo])],
  controllers: [ModelsController],
  providers: [ModelsService]
})
export class ModelsModule {}
