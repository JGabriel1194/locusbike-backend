import { CreatePedalDto } from './dto/create-pedal.dto';
import { UpdatePedalDto } from './dto/update-pedal.dto';
export declare class PedalsService {
    create(createPedalDto: CreatePedalDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePedalDto: UpdatePedalDto): string;
    remove(id: number): string;
}
