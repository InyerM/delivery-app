import { AllExceptionsFilter, SharedModule } from "@app/shared";
import { ConfigurationModule } from "@app/shared/configuration";
import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";

@Module({
  imports: [ConfigurationModule, SharedModule],
  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class UserModule {}
