import { Test, TestingModule } from '@nestjs/testing';
import { HandlebarsController } from './handlebars.controller';
import { HandlebarsService } from './handlebars.service';

describe('HandlebarsController', () => {
  let controller: HandlebarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandlebarsController],
      providers: [HandlebarsService],
    }).compile();

    controller = module.get<HandlebarsController>(HandlebarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
