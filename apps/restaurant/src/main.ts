import { NestFactory } from "@nestjs/core";
import { ShopModule } from "./shop.module";
import { ValidationPipe } from "@nestjs/common";
import { config } from "dotenv";

config();

async function bootstrap() {
  const app = await NestFactory.create(ShopModule, { snapshot: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.SHOP_PORT);
}
bootstrap();
