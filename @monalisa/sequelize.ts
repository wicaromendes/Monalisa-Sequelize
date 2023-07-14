import { Dialect, Options, Model, DataTypes  } from "sequelize";

interface SequelizeOptions extends Options {}

interface DatabaseConfig {
  [key: string]: SequelizeOptions;
  development: SequelizeOptions;
  test: SequelizeOptions;
  production: SequelizeOptions;
}

export { DatabaseConfig, Dialect, Options, Model, DataTypes };
