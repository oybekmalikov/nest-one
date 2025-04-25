import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { Builder } from "./models/builder.model";
import { CompanyService } from '../company/company.service'

@Injectable()
export class BuildersService {
	constructor(
		@InjectModel(Builder) private builderModel: typeof Builder,
		private readonly companyServise: CompanyService
	) {}
	async create(createBuilderDto: CreateBuilderDto) {
		console.log(createBuilderDto);
		const { companyId } = createBuilderDto;
		const company = await this.companyServise.findOneCompanies(companyId);
		if (!company) {
			throw new BadRequestException("No such company found");
		}
		return this.builderModel.create(createBuilderDto);
	}

	findAll() {
		return this.builderModel.findAll({ include: { all: true } });
	}

	findOne(id: number) {
		return `This action returns a #${id} builder`;
	}

	update(id: number, updateBuilderDto: UpdateBuilderDto) {
		return `This action updates a #${id} builder`;
	}

	remove(id: number) {
		return `This action removes a #${id} builder`;
	}
}
