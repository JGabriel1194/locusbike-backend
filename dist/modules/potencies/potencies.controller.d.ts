import { PotenciesService } from './potencies.service';
import { CreatePotencyDto } from './dto/create-potency.dto';
import { UpdatePotencyDto } from './dto/update-potency.dto';
export declare class PotenciesController {
    private readonly potenciesService;
    constructor(potenciesService: PotenciesService);
    create(createPotencyDto: CreatePotencyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePotencyDto: UpdatePotencyDto): string;
    remove(id: string): string;
}
