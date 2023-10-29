import { Test, TestingModule } from '@nestjs/testing';
import { BrakesService } from './brakes.service';

describe('BrakesService', () => {
  let service: BrakesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrakesService],
    }).compile();

    service = module.get<BrakesService>(BrakesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
