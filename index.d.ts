// Arquivo: index.d.ts
export declare class MonalisaSequelizeModule {
  public setConfig(configuration): Promise<void>;
  public connectToDatabase(environment: string): Promise<void>;
  public closeConnection(): Promise<void>;
}
