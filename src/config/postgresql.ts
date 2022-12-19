import { DataSource } from 'typeorm';
import { EntryOrder } from '../modules/entry_orders/model';
import { Document } from '../modules/documents/model';
import { ExitOrder } from '../modules/exit_orders/model';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  entities: [Document, EntryOrder, ExitOrder],
  //logging: true, //Show in console SQL commands
  synchronize: true //Read the entities and recreate them
});
