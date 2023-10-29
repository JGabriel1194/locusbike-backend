import { PartialType } from '@nestjs/swagger';
import { CreateTransmisionDto } from './create-transmision.dto';

export class UpdateTransmisionDto extends PartialType(CreateTransmisionDto) {}
