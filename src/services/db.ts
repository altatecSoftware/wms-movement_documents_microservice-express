import { DataSource } from 'typeorm';
import { EntryOrder } from '../api_modules/entry_order/model';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  entities: [EntryOrder],
  logging: true, //Show in console SQL commands
});
