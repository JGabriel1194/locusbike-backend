import { Module } from '@nestjs/common';
import { TransmisionsService } from './transmisions.service';
import { TransmisionsController } from './transmisions.controller';

@Module({
  controllers: [TransmisionsController],
  providers: [TransmisionsService]
})
export class TransmisionsModule {}
