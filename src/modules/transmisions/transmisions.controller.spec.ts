import { Test, TestingModule } from '@nestjs/testing';
import { TransmisionsController } from './transmisions.controller';
import { TransmisionsService } from './transmisions.service';

describe('TransmisionsController', () => {
  let controller: TransmisionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransmisionsController],
      providers: [TransmisionsService],
    }).compile();

    controller = module.get<TransmisionsController>(TransmisionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
