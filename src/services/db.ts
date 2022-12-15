import { DataSource } from 'typeorm';
import { EntryOrder } from '../api_modules/entry-orders/model';
import { Document } from '../api_modules/documents/model';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  entities: [Document, EntryOrder],
  //logging: true, //Show in console SQL commands
  synchronize: true //Read the entities and recreate them
});
