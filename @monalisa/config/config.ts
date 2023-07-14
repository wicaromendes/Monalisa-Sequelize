import { DatabaseConfig, Dialect } from "../sequelize";

const databaseConfig: DatabaseConfig = {
  development: {
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    database: process.env.DB_DATABASE || 'development_database',
    username: process.env.DB_USERNAME || 'development_username',
    password: process.env.DB_PASSWORD || 'development_password',
    logging: process.env.NODE_ENV === 'development',
  },
  test: {
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    database: process.env.DB_DATABASE || 'test_database',
    username: process.env.DB_USERNAME || 'test_username',
    password: process.env.DB_PASSWORD || 'test_password',
    logging: false,
  },
  production: {
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    database: process.env.DB_DATABASE || 'production_database',
    username: process.env.DB_USERNAME || 'production_username',
    password: process.env.DB_PASSWORD || 'production_password',
    logging: false,
  },
};

export default databaseConfig;
