import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from "sequelize-typescript";
import { Machine } from '../../machine/models/machine.model'
import { Driver } from '../../driver/models/driver.model'

interface IMachineDriverCreationAttr {
	driverId: number;
	machineId: number;
}
@Table({ tableName: "machine_driver", freezeTableName: true })
export class MachineDriver extends Model<
	MachineDriver,
	IMachineDriverCreationAttr
> {
	@ForeignKey(() => Driver)
	@Column({ type: DataType.INTEGER })
	driverId: number;

	@ForeignKey(() => Machine)
	@Column({ type: DataType.INTEGER })
	machineId: number;

	@BelongsTo(() => Machine)
	machine: Machine;
	@BelongsTo(() => Driver)
	driver: Driver;
}
