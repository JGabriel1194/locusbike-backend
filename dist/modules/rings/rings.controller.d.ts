import { RingsService } from './rings.service';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';
export declare class RingsController {
    private readonly ringsService;
    constructor(ringsService: RingsService);
    create(createRingDto: CreateRingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRingDto: UpdateRingDto): string;
    remove(id: string): string;
}
