import { CreatePotencyDto } from './dto/create-potency.dto';
import { UpdatePotencyDto } from './dto/update-potency.dto';
export declare class PotenciesService {
    create(createPotencyDto: CreatePotencyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePotencyDto: UpdatePotencyDto): string;
    remove(id: number): string;
}
