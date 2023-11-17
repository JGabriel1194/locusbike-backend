import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Response } from 'express';
export declare class BikesController {
    private readonly bikesService;
    constructor(bikesService: BikesService);
    create(res: Response, createBikeDto: CreateBikeDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: string): Promise<void>;
    update(res: Response, id: string, updateBikeDto: UpdateBikeDto): Promise<void>;
    remove(res: Response, id: string): Promise<void>;
}
