import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserRole } from "./models/user-role.model";
import { User } from "./models/user.model";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Role } from '../roles/models/role.model'
import { RolesModule } from '../roles/roles.module'

@Module({
	imports: [SequelizeModule.forFeature([User, UserRole, Role]), RolesModule],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}
