import { BrakesService } from './brakes.service';
import { CreateBrakeDto } from './dto/create-brake.dto';
import { UpdateBrakeDto } from './dto/update-brake.dto';
import { Response } from 'express';
export declare class BrakesController {
    private readonly brakesService;
    constructor(brakesService: BrakesService);
    create(res: Response, createBrakeDto: CreateBrakeDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: string): Promise<void>;
    update(res: Response, id: string, updateBrakeDto: UpdateBrakeDto): Promise<void>;
    remove(res: Response, id: string): string;
}
