import { ConfigurationModule } from "../../../libs/shared/src/configuration/configuration.module"
import { CommonModule } from "./common/common.module"
import { Module } from "@nestjs/common"

@Module({
  imports: [ConfigurationModule, CommonModule],
})
export class AppModule {}
