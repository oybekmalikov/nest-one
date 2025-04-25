import { ApiProperty } from "@nestjs/swagger";
import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table,
} from "sequelize-typescript";
import { UserRole } from "./user-role.model";
import { Role } from '../../roles/models/role.model'

interface IUserCreationAttr {
	name: string;
	email: string;
	password: string;
}
@Table({ tableName: "users", freezeTableName: true })
export class User extends Model<User, IUserCreationAttr> {
	@ApiProperty({
		example: 1,
		description: "User's unique id number",
	})
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@ApiProperty({
		example: "Ali",
		description: "User's name",
		default:`unknown_user`
	})
	@Column({ type: DataType.STRING })
	name: string;
	@Column({ type: DataType.STRING, unique: true })
	email: string;
	@Column({ type: DataType.STRING })
	password: string;
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	declare is_active: boolean;
	@BelongsToMany(() => Role, () => UserRole)
	roles: Role[];
}
