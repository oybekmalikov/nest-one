import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BuildersController } from "./builders.controller";
import { BuildersService } from "./builders.service";
import { Builder } from "./models/builder.model";
import { CompanyModule } from '../company/company.module'

@Module({
	imports: [SequelizeModule.forFeature([Builder]), CompanyModule],
	controllers: [BuildersController],
	providers: [BuildersService],
})
export class BuildersModule {}
