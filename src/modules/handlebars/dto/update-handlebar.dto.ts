import { PartialType } from '@nestjs/swagger';
import { CreateHandlebarDto } from './create-handlebar.dto';

export class UpdateHandlebarDto extends PartialType(CreateHandlebarDto) {}
