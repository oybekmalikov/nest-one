import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
	@IsString()
	@IsNotEmpty()
	value: string;
	@IsString()
	@IsNotEmpty()
	description: string;
}
