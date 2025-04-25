import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { CreateUserDto } from '../users/dto/create-user.dto'

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@Post("sign-up")
	signUp(@Body() createUserDto: CreateUserDto) {
		return this.authService.signUp(createUserDto);
	}
	@HttpCode(HttpStatus.OK)
	@Post("sign-in")
	signIn(@Body() signInDto: SignInDto) {
		return this.authService.signIn(signInDto);
	}
}
