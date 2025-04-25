import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./models/role.model";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";

@Module({
	imports: [SequelizeModule.forFeature([Role])],
	controllers: [RolesController],
	providers: [RolesService],
	exports: [RolesService],
})
export class RolesModule {}
