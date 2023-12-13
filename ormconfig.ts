import { DataSource } from "typeorm";
import dotenv from "dotenv";
import * as path from "path";

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URI,
  logging: false,
  synchronize: false,
  entities: [path.join(__dirname, "./src/entities/**/*{.ts,.js}")],
  extra: {
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false, //+
  },
});

export default dataSource;
// https://typeorm.io/data-source-options
