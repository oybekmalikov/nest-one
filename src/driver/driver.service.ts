import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";

@Injectable()
export class DriverService {
	constructor(@InjectModel(Driver) private driverModel: typeof Driver) {}
	create(createDriverDto: CreateDriverDto) {
		return this.driverModel.create(createDriverDto);
	}

	findAll() {
		return this.driverModel.findAll();
	}

	findOne(id: number) {
		return this.driverModel.findByPk(id);
	}

	update(id: number, updateDriverDto: UpdateDriverDto) {
		return this.driverModel.update(updateDriverDto, { where: { id } });
	}

	remove(id: number) {
		return this.driverModel.destroy({where:{id}})
	}
}
