import { Module } from '@nestjs/common';
import { BrakesService } from './brakes.service';
import { BrakesController } from './brakes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brake } from './entities/brake.entity';

@Module({
  imports:[SequelizeModule.forFeature([Brake])],
  controllers: [BrakesController],
  providers: [BrakesService]
})
export class BrakesModule {}
