import { DataSource } from "typeorm";
import { Pays} from "./entities/Pays";

const datasource = new DataSource({
  type: "sqlite",
  database: "./examBack.db",
  synchronize: true,
  entities: [Pays],
  logging: ["query", "error"],
});

export default datasource;
