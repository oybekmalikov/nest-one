import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table,
} from "sequelize-typescript";
import { User } from '../../users/models/user.model'
import { UserRole } from '../../users/models/user-role.model'

interface IRolesCreationAttr {
	value: string;
	description: string;
}
@Table({ tableName: "roles", freezeTableName: true, timestamps: false })
export class Role extends Model<Role, IRolesCreationAttr> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	value: string;
	@Column({ type: DataType.STRING })
	description: string;

	@BelongsToMany(() => User, () => UserRole)
	users: User[];
}
