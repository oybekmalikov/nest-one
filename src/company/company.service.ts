import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCompanyDto } from "./dto/create-company-dto";
import { UpdateCompanyDto } from "./dto/update-company-dto";
import { Company } from "./models/company.model";

@Injectable()
export class CompanyService {
	constructor(@InjectModel(Company) private companyModel: typeof Company) {}
	async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
		const company = await this.companyModel.create(createCompanyDto);
		return company;
	}
	async findAllCompanies(): Promise<Company[]> {
		return this.companyModel.findAll({ include: { all: true } });
	}
	async findOneCompanies(id: number): Promise<Company | null> {
		return this.companyModel.findByPk(id);
	}
	async updateCmpByID(
		id: number,
		updateCompanyDto: UpdateCompanyDto
	): Promise<Company> {
		const updatedCmp = await this.companyModel.update(updateCompanyDto, {
			where: { id: id },
			returning: true,
		});
		return updatedCmp[1][0];
	}
	async deleteCmpByID(id: number) {
		const deleted = await this.companyModel.destroy({ where: { id: id } });
		if (deleted > 0) {
			return "Company deleted";
		}
		return "Company not exists";
	}
}
