import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Modelo } from './entities/model.entity';
import { Response } from 'express';
export declare class ModelsService {
    private modelModel;
    constructor(modelModel: typeof Modelo);
    create(res: Response, createModelDto: CreateModelDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: number): Promise<void>;
    update(res: Response, id: number, updateModelDto: UpdateModelDto): Promise<void>;
    remove(res: Response, id: number): Promise<void>;
    findByModelName(res: Response, modelName: string): Promise<void>;
}
