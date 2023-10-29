import { Test, TestingModule } from '@nestjs/testing';
import { PedalsService } from './pedals.service';

describe('PedalsService', () => {
  let service: PedalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedalsService],
    }).compile();

    service = module.get<PedalsService>(PedalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
