import { PartialType } from '@nestjs/swagger';
import { CreatePotencyDto } from './create-potency.dto';

export class UpdatePotencyDto extends PartialType(CreatePotencyDto) {}
