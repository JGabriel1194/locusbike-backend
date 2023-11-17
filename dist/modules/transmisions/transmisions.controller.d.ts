import { TransmisionsService } from './transmisions.service';
import { CreateTransmisionDto } from './dto/create-transmision.dto';
import { UpdateTransmisionDto } from './dto/update-transmision.dto';
export declare class TransmisionsController {
    private readonly transmisionsService;
    constructor(transmisionsService: TransmisionsService);
    create(createTransmisionDto: CreateTransmisionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTransmisionDto: UpdateTransmisionDto): string;
    remove(id: string): string;
}
