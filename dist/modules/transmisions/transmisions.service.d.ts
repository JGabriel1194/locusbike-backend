import { CreateTransmisionDto } from './dto/create-transmision.dto';
import { UpdateTransmisionDto } from './dto/update-transmision.dto';
export declare class TransmisionsService {
    create(createTransmisionDto: CreateTransmisionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTransmisionDto: UpdateTransmisionDto): string;
    remove(id: number): string;
}
