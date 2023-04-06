import { NestFactory } from "@nestjs/core";
import { RestaurantModule } from "./restaurant.module";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(RestaurantModule, { snapshot: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(configService.getOrThrow<number>("RESTAURANT_PORT"));
}
bootstrap();
