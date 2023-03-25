import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigurationService } from "./configuration.service"

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        ConfigurationService.getTypeOrmConfig(configService).defaultConfig,
      inject: [ConfigService],
      name: "default",
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        ConfigurationService.getTypeOrmConfig(configService).adminConfig,
      inject: [ConfigService],
      name: "admin",
    }),
    ConfigModule,
  ],
  providers: [ConfigurationService],
})
export class ConfigurationModule {}
