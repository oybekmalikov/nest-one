import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "src/company/company.module";
import { BuildersController } from "./builders.controller";
import { BuildersService } from "./builders.service";
import { Builder } from "./models/builder.model";

@Module({
	imports: [SequelizeModule.forFeature([Builder]), CompanyModule],
	controllers: [BuildersController],
	providers: [BuildersService],
})
export class BuildersModule {}
