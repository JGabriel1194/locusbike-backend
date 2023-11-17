import { TiresService } from './tires.service';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';
export declare class TiresController {
    private readonly tiresService;
    constructor(tiresService: TiresService);
    create(createTireDto: CreateTireDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTireDto: UpdateTireDto): string;
    remove(id: string): string;
}
