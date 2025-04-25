import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "../../builders/models/builder.model";
import { Machine } from "../../machine/models/machine.model";

interface ICompanyCreationAttr {
	name: string;
	phone: string;
	email: string;
	address: string;
}
@Table({ tableName: "company", freezeTableName: true })
export class Company extends Model<Company, ICompanyCreationAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.STRING(100),
		allowNull: false,
		unique: true,
	})
	name: string;
	@Column({
		type: DataType.STRING(100),
	})
	email: string;

	@Column({
		type: DataType.STRING(20),
	})
	phone: string;

	@Column({
		type: DataType.STRING(100),
	})
	address: string;

	@HasMany(() => Builder)
	builder: Builder[];

	@HasMany(() => Machine)
	machine: Machine[];
}
