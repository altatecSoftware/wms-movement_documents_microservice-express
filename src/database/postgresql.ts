import { DataSource } from 'typeorm';
import { DetailModel, DocumentModel, DocumentSignatureModel, InboundOrderModel, 
         OutboundOrderModel, MovementModel } from '../models';

export default class PostreSQL {
  private _entities: any;
  private _migrations: any
  private _postgresDataSource: DataSource;
  private _config: any;

  constructor({ config }: any) {
    this._config = config
    this._entities = ['src/models/*.model.ts']; 
    this._migrations = ["src/migrations/*.ts"] 
  }

  public connection() {
    this._postgresDataSource = new DataSource({
      type: 'postgres',
      host: this._config.DB_HOSTNAME,
      username: this._config.DB_USERNAME,
      password: this._config.DB_PASSWORD,
      port: this._config.DB_PORT,
      database: this._config.DB_NAME,
      entities: this._entities,
      migrations: this._migrations,
      logging: false, //Show in console SQL commands
      synchronize: false, //Read the entities and recreate them - unsafe for production
      migrationsRun: true //Run migrations 
    });

    this._postgresDataSource.initialize()
      .then(() => {
        console.log('Postgres DataSource has been initialized');
      })
      .catch((err) => {
        console.error('***** Error during Data Source initialization *****\n', err);
      });
  }

  public getPostgresDataSource() {
    return this._postgresDataSource
  }
}
