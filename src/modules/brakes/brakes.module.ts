import { Module } from '@nestjs/common';
import { BrakesService } from './brakes.service';
import { BrakesController } from './brakes.controller';

@Module({
  controllers: [BrakesController],
  providers: [BrakesService]
})
export class BrakesModule {}
