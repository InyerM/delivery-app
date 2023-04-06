import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user.module";
import { ValidationPipe } from "@nestjs/common";
import { config } from "dotenv";

config();

async function bootstrap() {
  const app = await NestFactory.create(UserModule, { snapshot: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.USER_PORT);
}
bootstrap();
