import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { MySqlDriver } from "@mikro-orm/mysql";
import { User, Todo } from "./entities";

export const postgresConnection = {
  connectionManagerId: "postgresql",
  mikroOrmConfig: {
    entities: [User],
    driver: PostgreSqlDriver,
    dbName: "gw",
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    port: 5432,
  },
};

export const mySQLConnection = {
  connectionManagerId: "mysql",
  mikroOrmConfig: {
    entities: [Todo], // this will be implemented in the next step
    driver: MySqlDriver,
    dbName: "gw",
    user: "root",
    password: "",
    port: 3306,
  },
};

export const connections = [postgresConnection];
