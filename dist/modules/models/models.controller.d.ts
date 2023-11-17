import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Response } from 'express';
export declare class ModelsController {
    private readonly modelsService;
    constructor(modelsService: ModelsService);
    create(res: Response, createModelDto: CreateModelDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: string): Promise<void>;
    update(res: Response, id: string, updateModelDto: UpdateModelDto): Promise<void>;
    remove(res: Response, id: string): Promise<void>;
    findByModelName(res: Response, modelName: string): Promise<void>;
}
