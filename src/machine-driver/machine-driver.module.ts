import { Module } from '@nestjs/common';
import { MachineDriverService } from './machine-driver.service';
import { MachineDriverController } from './machine-driver.controller';
import { SequelizeModule } from '@nestjs/sequelize'
import { MachineDriver } from './models/machine-driver.model'

@Module({
  imports:[SequelizeModule.forFeature([MachineDriver])],
  controllers: [MachineDriverController],
  providers: [MachineDriverService],
})
export class MachineDriverModule {}
