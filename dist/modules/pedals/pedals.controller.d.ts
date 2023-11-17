import { PedalsService } from './pedals.service';
import { CreatePedalDto } from './dto/create-pedal.dto';
import { UpdatePedalDto } from './dto/update-pedal.dto';
export declare class PedalsController {
    private readonly pedalsService;
    constructor(pedalsService: PedalsService);
    create(createPedalDto: CreatePedalDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePedalDto: UpdatePedalDto): string;
    remove(id: string): string;
}
