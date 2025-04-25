import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../common/Guards/jwt-auth.guard";
import { JwtSelfGuard } from "../common/Guards/jwt-self.guard";
import { Roles } from "../common/decorator/roles-auth.decorator";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { AddRoleDto } from "./dto/add-role.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./models/user.model";
import { UsersService } from "./users.service";
import { JwtRolesGuard } from '../common/Guards/roles.guard'

@ApiTags("Users-Foydalanuvchilar")
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@ApiOperation({ summary: "Add Users" })
	@ApiResponse({ status: 201, description: "Create user", type: User })
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}
	@ApiOperation({ summary: "Get All Users" })
	@ApiResponse({ status: 200, description: "List of users", type: [User] })
	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.usersService.findAll();
	}
	@ApiOperation({ summary: "Get One User(by user's id)" })
	@ApiResponse({ status: 200, description: "user's info", type: User })
	@UseGuards(JwtSelfGuard)
	@UseGuards(JwtAuthGuard)
	@Get(":id")
	findOne(@Param("id", ParseIntPipe) id: number) {
		return this.usersService.findOne(id);
	}
	@ApiOperation({ summary: "Update User" })
	@ApiResponse({ status: 200, description: "user's info", type: [User] })
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(+id, updateUserDto);
	}
	@ApiOperation({ summary: "Delete User" })
	@ApiResponse({ status: 200, description: "return effected", type: Number })
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.usersService.remove(+id);
	}
	@ApiOperation({ summary: "Add role for User" })
	@ApiResponse({ status: 200, description: "return role", type: Object })
	@HttpCode(HttpStatus.OK)
	@Roles("ADMIN", "SUPERADMIN")
	@UseGuards(JwtRolesGuard)
	@UseGuards(JwtAuthGuard)
	@Post("add-role")
	async addRole(@Body() addRoleDto: AddRoleDto) {
		return this.usersService.addRole(addRoleDto);
	}
	@ApiOperation({ summary: "Delete Role" })
	@ApiResponse({ status: 200, description: "return role", type: Object })
	@HttpCode(HttpStatus.OK)
	@Post("remove-role")
	async removeRole(@Body() addRoleDto: AddRoleDto) {
		return this.usersService.removeRole(addRoleDto);
	}
	@ApiOperation({ summary: "Activate User" })
	@ApiResponse({ status: 200, description: "return answer", type: String })
	@HttpCode(HttpStatus.OK)
	@Post("activate")
	async activateUser(@Body() activateUserDto: ActivateUserDto) {
		return this.usersService.activateUser(activateUserDto);
	}
}
