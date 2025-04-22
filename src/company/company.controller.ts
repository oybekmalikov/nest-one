import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company-dto";
import { UpdateCompanyDto } from "./dto/update-company-dto";
import { Company } from "./models/company.model";

@Controller("company")
export class CompanyController {
	constructor(private readonly companyService: CompanyService) {}
	@Post()
	async createCompany(
		@Body() createCompanyDto: CreateCompanyDto
	): Promise<Company> {
		return this.companyService.createCompany(createCompanyDto);
	}
	@Get()
	async findAllCompanies() {
		return this.companyService.findAllCompanies();
	}
	@Get(":id")
	async findOneCompanies(@Param("id") id: string) {
		return this.companyService.findOneCompanies(+id);
	}
	@Patch(":id")
	async updateCmpById(
		@Param("id") id: string,
		@Body() updateCompanyDtp: UpdateCompanyDto
	) {
		return this.companyService.updateCmpByID(+id, updateCompanyDtp);
	}
	@Delete(":id")
	async deleteCmpById(@Param("id") id: string) {
		return this.companyService.deleteCmpByID(+id);
	}
}
