import { CreateHandlebarDto } from './dto/create-handlebar.dto';
import { UpdateHandlebarDto } from './dto/update-handlebar.dto';
export declare class HandlebarsService {
    create(createHandlebarDto: CreateHandlebarDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHandlebarDto: UpdateHandlebarDto): string;
    remove(id: number): string;
}
