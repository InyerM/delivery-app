import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { GetTypeOrmConfigResponse } from "./interfaces";
import { adminEntities } from "@app/entities/admin";
import { defaultEntities } from "@app/entities/default";

@Injectable()
export class ConfigurationService {
  static getTypeOrmConfig = (configService: ConfigService): GetTypeOrmConfigResponse => {
    const config: TypeOrmModuleOptions = {
      type: "postgres",
      host: configService.getOrThrow<string>("DB_HOST"),
      port: configService.getOrThrow<number>("DB_PORT"),
      synchronize: !!configService.getOrThrow<boolean>("DB_SYNCHRONIZE"),
      applicationName: "delivery-app",
      dropSchema: !!configService.getOrThrow<boolean>("DB_DROP_SCHEMA"),
      logging: !!configService.getOrThrow<boolean>("DB_LOGGING"),
      logger: "advanced-console",
      migrationsRun: !!configService.getOrThrow<boolean>("DB_MIGRATIONS_RUN"),
      retryAttempts: configService.get<number>("DB_RETRY_ATTEMPTS") || 3,
      retryDelay: configService.get<number>("DB_RETRY_DELAY") || 1000,
      migrationsTableName: "TypeormMigrations",
    };
    return {
      adminConfig: {
        ...config,
        name: "admin",
        database: configService.getOrThrow<string>("DB_ADMIN_DATABASE"),
        username: configService.getOrThrow<string>("DB_ADMIN_USERNAME"),
        password: configService.getOrThrow<string>("DB_ADMIN_PASSWORD"),
        entities: adminEntities,
        migrations: [configService.getOrThrow<string>("DB_ADMIN_MIGRATIONS_DIR")],
      },
      defaultConfig: {
        ...config,
        name: "default",
        database: configService.getOrThrow<string>("DB_DATABASE"),
        username: configService.getOrThrow<string>("DB_USERNAME"),
        password: configService.getOrThrow<string>("DB_PASSWORD"),
        entities: defaultEntities,
        migrations: [configService.getOrThrow<string>("DB_MIGRATIONS_DIR")],
      },
    };
  };
}
