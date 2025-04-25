import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table,
} from "sequelize-typescript";
import { MachineDriver } from "../../machine-driver/models/machine-driver.model";
import { Machine } from "../../machine/models/machine.model";

interface IDriverCreationAttr {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	driverLicense: string;
}
@Table({ tableName: "drivers", freezeTableName: true })
export class Driver extends Model<Driver, IDriverCreationAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@Column({ type: DataType.STRING })
	firstName: string;
	@Column({ type: DataType.STRING })
	lastName: string;
	@Column({ type: DataType.STRING })
	phoneNumber: string;
	@Column({ type: DataType.STRING })
	driverLicense: string;

	@BelongsToMany(() => Machine, () => MachineDriver)
	machines: Machine[];
}
