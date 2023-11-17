import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { Response } from 'express';
export declare class BrandsService {
    private brandModel;
    constructor(brandModel: typeof Brand);
    create(res: Response, createBrandDto: CreateBrandDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: number): Promise<void>;
    update(res: Response, id: number, updateBrandDto: UpdateBrandDto): Promise<void>;
    remove(id: number): string;
}
