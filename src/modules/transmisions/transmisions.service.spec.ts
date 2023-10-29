import { Test, TestingModule } from '@nestjs/testing';
import { TransmisionsService } from './transmisions.service';

describe('TransmisionsService', () => {
  let service: TransmisionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransmisionsService],
    }).compile();

    service = module.get<TransmisionsService>(TransmisionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
