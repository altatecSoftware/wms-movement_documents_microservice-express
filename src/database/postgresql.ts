import { DataSource } from 'typeorm';

const Postgresql = ({config}) => {
  const postgresDataSource = new DataSource({
    type: 'postgres',
    host: config.DB_HOSTNAME,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
    database: config.DB_NAME,
    entities: ["src/entities/*.entity.ts"],
    migrations: ["src/migrations/*.ts"],
    logging: false, //Show in console SQL commands
    synchronize: false, //Read the entities and recreate them - unsafe for production
    migrationsRun: true //Run migrations 
  });

  return postgresDataSource
}

export default Postgresql


