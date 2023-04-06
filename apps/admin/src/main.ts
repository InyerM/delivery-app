import { NestFactory } from "@nestjs/core";
import { AdminModule } from "./admin.module";
import { LoggerService } from "@app/shared/logger/logger.service";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AdminModule, { snapshot: true, bufferLogs: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useLogger(app.get(LoggerService));
  await app.listen(process.env.ADMIN_PORT);
}
bootstrap();
