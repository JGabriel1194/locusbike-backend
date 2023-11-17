import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';
export declare class TiresService {
    create(createTireDto: CreateTireDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTireDto: UpdateTireDto): string;
    remove(id: number): string;
}
