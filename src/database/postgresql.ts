import { DataSource } from 'typeorm';
import { EntryOrder as EntryOrders } from '../modules/entry_orders/model';
import { Document as Documents } from '../modules/documents/model';
import { ExitOrder as ExitOrders } from '../modules/exit_orders/model';

export class PostreSQL {
  private type: any;
  private host: any;
  private username: any;
  private password: any;
  private port: any;
  private database: any;
  private entities: any;
  private synchronize: any;

  constructor() {
    this.type = 'postgres';
    this.host = process.env.DB_HOSTNAME;
    this.username = process.env.DB_USERNAME;
    this.password = process.env.DB_PASSWORD;
    this.port = Number(process.env.DB_PORT);
    this.database = process.env.DB_NAME;
    this.entities = [Documents, EntryOrders, ExitOrders];
    this.synchronize = true;
  }

  public connection() {
    const PostgresDataSource = new DataSource({
      type: this.type,
      host: this.host,
      username: this.username,
      password: this.password,
      port: this.port,
      database: this.database,
      entities: this.entities,
      //logging: true, //Show in console SQL commands
      synchronize: this.synchronize, //Read the entities and recreate them
    });

    PostgresDataSource.initialize()
      .then(() => {
        console.log('Postgres DataSource has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  }
}
