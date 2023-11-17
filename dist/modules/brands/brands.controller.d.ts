import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Response } from 'express';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(res: Response, createBrandDto: CreateBrandDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: string): Promise<void>;
    update(res: Response, id: string, updateBrandDto: UpdateBrandDto): Promise<void>;
    remove(id: string): string;
}
