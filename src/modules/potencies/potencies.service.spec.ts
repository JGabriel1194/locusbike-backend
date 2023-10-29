import { Test, TestingModule } from '@nestjs/testing';
import { PotenciesService } from './potencies.service';

describe('PotenciesService', () => {
  let service: PotenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotenciesService],
    }).compile();

    service = module.get<PotenciesService>(PotenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
