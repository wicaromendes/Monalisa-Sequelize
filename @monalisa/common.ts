import { Sequelize } from 'sequelize';
import databaseConfig from './config/config';

let sequelize: Sequelize | null = null;

export class MonalisaSequelizeModule {
  public async setConfig(configuration: any): Promise<void> {
    Object.assign(databaseConfig, configuration);
  }

  public async connectToDatabase(environment: string): Promise<void> {
    if (!sequelize) {
      const environmentConfig = databaseConfig[environment];
      sequelize = new Sequelize(environmentConfig);

      try {
        await sequelize.authenticate();
        console.log('Conexão bem-sucedida ao banco de dados.');
      } catch (error) {
        console.error('Falha na conexão ao banco de dados:', error);
      }
    }
  }

  public async closeConnection(): Promise<void> {
    if (sequelize) {
      await sequelize.close();
      sequelize = null;
    }
  }
}
