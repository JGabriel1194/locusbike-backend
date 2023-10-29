import { Test, TestingModule } from '@nestjs/testing';
import { BrakesController } from './brakes.controller';
import { BrakesService } from './brakes.service';

describe('BrakesController', () => {
  let controller: BrakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrakesController],
      providers: [BrakesService],
    }).compile();

    controller = module.get<BrakesController>(BrakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
