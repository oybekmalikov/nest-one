import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import sequelize from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

async function start() {
	try {
		const PORT = process.env.PORT || 3030;
		const app = await NestFactory.create(AppModule);
		// await Sequelize.
		await app.listen(PORT, () => {
			console.log("Server started on http://localhost:" + PORT);
		});
	} catch (error) {
		console.log(error);
	}
}
start();
