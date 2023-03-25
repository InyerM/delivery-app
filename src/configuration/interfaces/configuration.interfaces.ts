import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export interface GetTypeOrmConfigResponse {
  adminConfig: TypeOrmModuleOptions
  defaultConfig: TypeOrmModuleOptions
}
