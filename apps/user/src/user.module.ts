import { AllExceptionsFilter, SharedModule } from "@app/shared";
import { ConfigurationModule } from "@app/shared/configuration";
import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [ConfigurationModule, SharedModule, AuthModule],
  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class UserModule {}
