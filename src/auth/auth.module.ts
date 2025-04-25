import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from '../users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
		UsersModule,
		JwtModule.register({
			global: true,
			secret: process.env.SECRET_KEY,
			signOptions: { expiresIn: process.env.SECRET_TIME },
		}),
	],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
