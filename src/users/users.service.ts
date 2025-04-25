import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "../roles/models/role.model";
import { RolesService } from "../roles/roles.service";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { AddRoleDto } from "./dto/add-role.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./models/user.model";
@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User) private readonly userModel: typeof User,
		private readonly roleServise: RolesService
	) {}
	async create(createUserDto: CreateUserDto) {
		const newUser = await this.userModel.create(createUserDto);
		const role = await this.roleServise.findByValue(createUserDto.value);
		if (!role) {
			throw new NotFoundException("Role not found");
		}
		await newUser.$set("roles", [role.id]);
		newUser.roles = [role];
		await newUser.save();
		return newUser;
	}
	findAll() {
		return this.userModel.findAll({ include: { all: true } });
	}
	async findByEmail(email: string) {
		const user = await this.userModel.findOne({
			where: { email },
			include: {
				model: Role,
				attributes: ["value"],
				through: { attributes: [] },
			},
		});
		return user?.dataValues;
	}
	findOne(id: number) {
		return this.userModel.findByPk(id);
	}
	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}
	remove(id: number) {
		return `This action removes a #${id} user`;
	}
	async addRole(addRoleDto: AddRoleDto) {
		const user = await this.findOne(addRoleDto.userId);
		const role = await this.roleServise.findByValue(addRoleDto.value);
		if (!role || !user) {
			throw new NotFoundException("User or role not exists");
		}
		await user.$add("roles", role.id);
		return "Role added";
	}
	async removeRole(addRoleDto: AddRoleDto) {
		const user = await this.findOne(addRoleDto.userId);
		const role = await this.roleServise.findByValue(addRoleDto.value);
		if (!role || !user) {
			throw new NotFoundException("User or role not exists");
		}
		console.log(user, role);
		await user.$remove("roles", role.id);
		return "Role removed";
	}
	async activateUser(activateUserDto: ActivateUserDto) {
		const user = await this.findOne(activateUserDto.userId);
		if (!user) {
			throw new NotFoundException("user not found");
		}
		user.is_active = true;
		await user.save();
		return "user activated";
	}
}
