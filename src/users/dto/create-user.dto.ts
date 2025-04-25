import { ApiProperty } from '@nestjs/swagger'
import {
	IsEmail,
	IsNotEmpty,
	IsString,
	IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
	@ApiProperty({
		example:"user1",
		description:"user's name"
	})
	@IsString()
	@IsNotEmpty()
	name: string;
	@ApiProperty({
		example:"user@example.com",
		description:"user's email"
	})
	@IsEmail()
	email: string;
	@ApiProperty({
		example:"********",
		description:"user's password"
	})
	@IsStrongPassword({},	 { message: "Password kuchli emas" })
	password: string;
	@ApiProperty({
		example:"USER",
		description:"user's role"
	})
	@IsString()
	@IsNotEmpty()
	value: string;
}
