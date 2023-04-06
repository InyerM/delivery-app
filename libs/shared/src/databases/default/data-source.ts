import { DataSource } from "typeorm";
import { config } from "dotenv";
import { loadFilesAsArray } from "@app/shared/utils";
import { defaultEntities } from "@app/entities/default";

config();
const migrationsDir: string = process.env.DB_MIGRATIONS_DIR;
const filesArray = loadFilesAsArray(migrationsDir);

const dataSource: DataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: defaultEntities,
  migrations: filesArray,
  migrationsTableName: "TypeormMigrations",
});

export default dataSource;
