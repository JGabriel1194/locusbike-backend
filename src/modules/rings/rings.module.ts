import { Module } from '@nestjs/common';
import { RingsService } from './rings.service';
import { RingsController } from './rings.controller';

@Module({
  controllers: [RingsController],
  providers: [RingsService]
})
export class RingsModule {}
