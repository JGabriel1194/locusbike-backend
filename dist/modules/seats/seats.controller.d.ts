import { SeatsService } from './seats.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
export declare class SeatsController {
    private readonly seatsService;
    constructor(seatsService: SeatsService);
    create(createSeatDto: CreateSeatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSeatDto: UpdateSeatDto): string;
    remove(id: string): string;
}
