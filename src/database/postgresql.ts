import { DataSource } from 'typeorm';
import { EntryOrder as EntryOrders } from '../modules/entry_orders/model';
import { Document as Documents } from '../modules/documents/model';
import { ExitOrder as ExitOrders } from '../modules/departure_orders/model';

export default class PostreSQL {
  private _entities: any;
  private _postgresDataSource: any;
  private _config: any;

  constructor({config}: any) {
    this._config = config
    this._entities = [Documents, EntryOrders, ExitOrders];
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
      //logging: true, //Show in console SQL commands
      synchronize: true, //Read the entities and recreate them
    });

    this._postgresDataSource.initialize()
      .then(() => {
        console.log('Postgres DataSource has been initialized');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  }
}
