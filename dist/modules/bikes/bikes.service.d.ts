import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Bike } from './entities/bike.entity';
import { Response } from 'express';
export declare class BikesService {
    private bikeModel;
    constructor(bikeModel: typeof Bike);
    create(res: Response, createBikeDto: CreateBikeDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: number): Promise<void>;
    update(res: Response, id: number, updateBikeDto: UpdateBikeDto): Promise<void>;
    remove(res: Response, id: number): Promise<void>;
}
