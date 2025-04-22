import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { Company } from "./models/company.model";

@Module({
	imports: [SequelizeModule.forFeature([Company])],
	controllers: [CompanyController],
	providers: [CompanyService],
	exports: [CompanyService],
})
export class CompanyModule {}
