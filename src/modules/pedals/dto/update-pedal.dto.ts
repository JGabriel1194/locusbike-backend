import { PartialType } from '@nestjs/swagger';
import { CreatePedalDto } from './create-pedal.dto';

export class UpdatePedalDto extends PartialType(CreatePedalDto) {}
