import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MachineDriverService } from './machine-driver.service';
import { CreateMachineDriverDto } from './dto/create-machine-driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine-driver.dto';

@Controller('machine-driver')
export class MachineDriverController {
  constructor(private readonly machineDriverService: MachineDriverService) {}

  @Post()
  create(@Body() createMachineDriverDto: CreateMachineDriverDto) {
    return this.machineDriverService.create(createMachineDriverDto);
  }

  @Get()
  findAll() {
    return this.machineDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMachineDriverDto: UpdateMachineDriverDto) {
    return this.machineDriverService.update(+id, updateMachineDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineDriverService.remove(+id);
  }
}
