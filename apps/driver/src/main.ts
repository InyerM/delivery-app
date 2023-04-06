import { NestFactory } from "@nestjs/core";
import { DriverModule } from "./driver.module";
import { ValidationPipe } from "@nestjs/common";
import { config } from "dotenv";
import { LoggerService } from "@app/shared/logger/logger.service";

config();

async function bootstrap() {
  const app = await NestFactory.create(DriverModule, { snapshot: true, bufferLogs: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useLogger(app.get(LoggerService));
  await app.listen(process.env.DRIVER_PORT);
}
bootstrap();
