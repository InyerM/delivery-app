import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigurationService } from "./configuration.service";
import { DevtoolsModule } from "@nestjs/devtools-integration";
import { NodeEnv } from "../types";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DevtoolsModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        http: configService.getOrThrow<NodeEnv>("NODE_ENV") !== "production",
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        ConfigurationService.getTypeOrmConfig(configService).defaultConfig,
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        ConfigurationService.getTypeOrmConfig(configService).adminConfig,
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigurationService],
})
export class ConfigurationModule {}
