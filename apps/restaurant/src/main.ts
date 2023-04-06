import { NestFactory } from "@nestjs/core";
import { ShopModule } from "./shop.module";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(ShopModule, { snapshot: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(configService.getOrThrow<number>("SHOP_PORT"));
}
bootstrap();
