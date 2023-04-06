import { NestFactory } from "@nestjs/core";
import { DriverModule } from "./driver.module";
import { ValidationPipe } from "@nestjs/common";
import { config } from "dotenv";

config();

async function bootstrap() {
  const app = await NestFactory.create(DriverModule, { snapshot: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.DRIVER_PORT);
}
bootstrap();
