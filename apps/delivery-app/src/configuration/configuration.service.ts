import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { GetTypeOrmConfigResponse } from "./interfaces"
import { adminEntities } from "@detabases/admin/entities"
import { defaultEntities } from "@detabases/default/entities"

@Injectable()
export class ConfigurationService {
  static getTypeOrmConfig = (configService: ConfigService): GetTypeOrmConfigResponse => {
    const config: TypeOrmModuleOptions = {
      type: "postgres",
      host: configService.getOrThrow<string>("DB_HOST"),
      port: configService.getOrThrow<number>("DB_PORT"),
      synchronize: Boolean(configService.getOrThrow<boolean>("DB_SYNCHRONIZE")),
      applicationName: "delivery-app",
      dropSchema: Boolean(configService.getOrThrow<boolean>("DB_DROP_SCHEMA")),
      logging: Boolean(configService.getOrThrow<boolean>("DB_LOGGING")),
      logger: "advanced-console",
      migrationsRun: Boolean(configService.getOrThrow<boolean>("DB_MIGRATIONS_RUN")),
      retryAttempts: configService.get<number>("DB_RETRY_ATTEMPTS") || 3,
      retryDelay: configService.get<number>("DB_RETRY_DELAY") || 1000,
      autoLoadEntities: true,
      migrationsTableName: "TypeormMigrations",
    }
    return {
      adminConfig: {
        ...config,
        name: "admin",
        database: configService.getOrThrow<string>("DB_ADMIN_DATABASE"),
        username: configService.getOrThrow<string>("DB_ADMIN_USERNAME"),
        password: configService.getOrThrow<string>("DB_ADMIN_PASSWORD"),
        entities: adminEntities,
        migrations: [configService.getOrThrow<string>("DB_ADMIN_MIGRATIONS_DIR")],
        subscribers: [configService.getOrThrow<string>("DB_ADMIN_SUBSCRIBERS_DIR")],
      },
      defaultConfig: {
        ...config,
        name: "default",
        database: configService.getOrThrow<string>("DB_DATABASE"),
        username: configService.getOrThrow<string>("DB_USERNAME"),
        password: configService.getOrThrow<string>("DB_PASSWORD"),
        entities: defaultEntities,
        migrations: [configService.getOrThrow<string>("DB_MIGRATIONS_DIR")],
        subscribers: [configService.getOrThrow<string>("DB_SUBSCRIBERS_DIR")],
      },
    }
  }
}
