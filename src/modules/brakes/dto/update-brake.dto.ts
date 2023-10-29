import { PartialType } from '@nestjs/swagger';
import { CreateBrakeDto } from './create-brake.dto';

export class UpdateBrakeDto extends PartialType(CreateBrakeDto) {}
