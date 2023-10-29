import { Test, TestingModule } from '@nestjs/testing';
import { PedalsController } from './pedals.controller';
import { PedalsService } from './pedals.service';

describe('PedalsController', () => {
  let controller: PedalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedalsController],
      providers: [PedalsService],
    }).compile();

    controller = module.get<PedalsController>(PedalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
