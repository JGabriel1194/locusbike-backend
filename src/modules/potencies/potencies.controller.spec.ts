import { Test, TestingModule } from '@nestjs/testing';
import { PotenciesController } from './potencies.controller';
import { PotenciesService } from './potencies.service';

describe('PotenciesController', () => {
  let controller: PotenciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotenciesController],
      providers: [PotenciesService],
    }).compile();

    controller = module.get<PotenciesController>(PotenciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
