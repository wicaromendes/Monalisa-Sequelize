import { Dialect, Options } from "sequelize";

interface SequelizeOptions extends Options {}

interface DatabaseConfig {
  [key: string]: SequelizeOptions;
  development: SequelizeOptions;
  test: SequelizeOptions;
  production: SequelizeOptions;
}

export { DatabaseConfig, Dialect };
