import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bike } from './entities/bike.entity';

@Module({
  imports: [SequelizeModule.forFeature([Bike])],
  controllers: [BikesController],
  providers: [BikesService]
})
export class BikesModule {}
