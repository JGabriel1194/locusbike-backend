import { HandlebarsService } from './handlebars.service';
import { CreateHandlebarDto } from './dto/create-handlebar.dto';
import { UpdateHandlebarDto } from './dto/update-handlebar.dto';
export declare class HandlebarsController {
    private readonly handlebarsService;
    constructor(handlebarsService: HandlebarsService);
    create(createHandlebarDto: CreateHandlebarDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHandlebarDto: UpdateHandlebarDto): string;
    remove(id: string): string;
}
