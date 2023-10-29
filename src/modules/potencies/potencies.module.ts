import { Module } from '@nestjs/common';
import { PotenciesService } from './potencies.service';
import { PotenciesController } from './potencies.controller';

@Module({
  controllers: [PotenciesController],
  providers: [PotenciesService]
})
export class PotenciesModule {}
