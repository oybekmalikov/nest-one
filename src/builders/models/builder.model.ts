import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from "sequelize-typescript";
import { Company } from "src/company/models/company.model";

interface IBuilderCreationAttr {
	fullName: string;
	brithday: Date;
	salary: number;
	companyId: number;
}
@Table({ tableName: "builders", freezeTableName: true, timestamps: false })
export class Builder extends Model<Builder, IBuilderCreationAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.STRING,
	})
	fullName: string;

	@Column({
		type: DataType.DATEONLY,
	})
	brithday: string;

	@Column({
		type: DataType.DECIMAL(15, 2),
	})
	salary: number;

	@ForeignKey(() => Company)
	@Column({
		type: DataType.INTEGER,
		onDelete:"SET NULL"
	})
	companyId: number;

	@BelongsTo(() => Company)
	company: Company;
}
