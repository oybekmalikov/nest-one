import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildersService } from './builders.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Controller('builders')
export class BuildersController {
  constructor(private readonly buildersService: BuildersService) {}

  @Post()
  create(@Body() createBuilderDto: CreateBuilderDto) {
    return this.buildersService.create(createBuilderDto);
  }

  @Get()
  findAll() {
    return this.buildersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuilderDto: UpdateBuilderDto) {
    return this.buildersService.update(+id, updateBuilderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildersService.remove(+id);
  }
}
