import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import * as os from "node:os"

async function start() {
	try {
		console.log(os.uptime())
		const PORT = process.env.PORT || 3030;
		const app = await NestFactory.create(AppModule);
		app.useGlobalPipes(new ValidationPipe());

		const config = new DocumentBuilder()
			.setTitle("Nest-One Project")
			.setDescription("Nest-One REST API")
			.setVersion("1.0")
			.addTag("Nest JS", "Swagger")
			.addTag("Validation", "Guard")
			.addBearerAuth()
			.build();
		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup("docs", app, document);
		await app.listen(PORT, () => {
			console.log("Server started on http://localhost:" + PORT);
		});
	} catch (error) {
		console.log(error);
	}
}
start();
