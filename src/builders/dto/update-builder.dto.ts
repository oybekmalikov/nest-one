import { PartialType } from '@nestjs/mapped-types';
import { CreateBuilderDto } from './create-builder.dto';

export class UpdateBuilderDto extends PartialType(CreateBuilderDto) {}
