import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres', 
  host: 'localhost', 
  username: 'postgres', 
  password: '12345678', 
  port: 5432, 
  database: 'document_movements', 
  entities: [],
  logging: true //Show in console SQL commands 
})

