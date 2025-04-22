import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { BuildersModule } from "./builders/builders.module";
import { Builder } from "./builders/models/builder.model";
import { CompanyModule } from "./company/company.module";
import { Company } from "./company/models/company.model";
import { DriverModule } from "./driver/driver.module";
import { Driver } from "./driver/models/driver.model";
import { MachineDriverModule } from "./machine-driver/machine-driver.module";
import { MachineDriver } from "./machine-driver/models/machine-driver.model";
import { MachineModule } from "./machine/machine.module";
import { Machine } from "./machine/models/machine.model";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
		SequelizeModule.forRoot({
			dialect: "postgres",
			host: process.env.PG_HOST,
			port: Number(process.env.PG_PORT),
			username: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DB,
			models: [Company, Builder, Machine, Driver, MachineDriver],
			autoLoadModels: true,
			sync: { alter: true },
			logging: false,
		}),
		CompanyModule,
		BuildersModule,
		MachineModule,
		DriverModule,
		MachineDriverModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
