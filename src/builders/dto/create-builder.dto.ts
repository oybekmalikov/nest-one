import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBuilderDto {
	@ApiProperty({
		example:"Ali Aliyev",
		description:"builde's name"
	})
	@IsString()
	@IsNotEmpty()
	fullName: string;
	@ApiProperty({
		example:"2000-01-01",
		description:"builde's brith day"
	})
	@IsDateString()
	brithday: Date;
	@ApiProperty({
		example:199.99,
		description:"builde's salary"
	})
	@IsNumber()
	salary: number;
	@ApiProperty({
		example:1,
		description:"builde's company id"
	})
	@IsNumber()
	companyId: number;
}