import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';
export declare class RingsService {
    create(createRingDto: CreateRingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRingDto: UpdateRingDto): string;
    remove(id: number): string;
}
