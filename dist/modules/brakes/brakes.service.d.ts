import { CreateBrakeDto } from './dto/create-brake.dto';
import { UpdateBrakeDto } from './dto/update-brake.dto';
import { Brake } from './entities/brake.entity';
import { Response } from 'express';
export declare class BrakesService {
    private brakeModel;
    constructor(brakeModel: typeof Brake);
    create(res: Response, createBrakeDto: CreateBrakeDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: number): Promise<void>;
    update(res: Response, id: number, updateBrakeDto: UpdateBrakeDto): Promise<void>;
    remove(res: Response, id: number): string;
}
