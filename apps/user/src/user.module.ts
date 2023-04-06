import { ConfigurationModule } from "@app/shared/configuration";
import { Module } from "@nestjs/common";

@Module({
  imports: [ConfigurationModule],
})
export class UserModule {}
