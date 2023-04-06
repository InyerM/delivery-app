import { DataSource } from "typeorm";
import { config } from "dotenv";
import { loadFilesAsArray } from "@app/shared/utils";
import { adminEntities } from "@app/entities/admin";

config();
const migrationsDir: string = process.env.DB_ADMIN_MIGRATIONS_DIR;
const filesArray = loadFilesAsArray(migrationsDir);

const dataSource: DataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_ADMIN_USERNAME,
  password: process.env.DB_ADMIN_PASSWORD,
  database: process.env.DB_ADMIN_DATABASE,
  entities: adminEntities,
  migrations: filesArray,
  migrationsTableName: "TypeormMigrations",
});

export default dataSource;
