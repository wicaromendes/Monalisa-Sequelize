import { Sequelize } from 'sequelize';
import databaseConfig from './config/DatabaseConfig';
import { DatabaseConfig } from './interfaces/DatabaseConfig';

let sequelize: Sequelize | null = null;

export class MonalisaSequelize {
  public async setConfig(configuration: DatabaseConfig):Promise<void>{
    Object.assign(databaseConfig, configuration);
  }

  public async connectToDatabase(environment: string):Promise<void> {
    if (!sequelize) {
      const environmentConfig = databaseConfig[environment];
      new Sequelize(environmentConfig).authenticate().then(() => {
          console.log('Conexão bem-sucedida ao banco de dados.');
      }).catch((error) => {
          console.error('Falha na conexão ao banco de dados:', error);
      });
    }
  }

 public async closeConnection():Promise<void> {
    if (sequelize) {
      await sequelize.close();
      sequelize = null;
    }
  }
}
