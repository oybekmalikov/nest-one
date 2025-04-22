import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineDriverDto } from './create-machine-driver.dto';

export class UpdateMachineDriverDto extends PartialType(CreateMachineDriverDto) {}
