import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMachineDriverDto } from "./dto/create-machine-driver.dto";
import { UpdateMachineDriverDto } from "./dto/update-machine-driver.dto";
import { MachineDriver } from "./models/machine-driver.model";

@Injectable()
export class MachineDriverService {
	constructor(
		@InjectModel(MachineDriver) private machineDriverModel: typeof MachineDriver
	) {}
	create(createMachineDriverDto: CreateMachineDriverDto) {
		return this.machineDriverModel.create(createMachineDriverDto);
	}

	findAll() {
		return this.machineDriverModel.findAll({ include: { all: true } });
	}

	findOne(id: number) {
		return this.machineDriverModel.findByPk(id);
	}

	update(id: number, updateMachineDriverDto: UpdateMachineDriverDto) {
		return this.machineDriverModel.update(updateMachineDriverDto, {
			where: { id },
		});
	}

	remove(id: number) {
		return this.machineDriverModel.destroy({ where: { id } });
	}
}
