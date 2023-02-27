import express, { Application } from 'express';
import { errors } from 'celebrate'
import morgan from 'morgan'
import cors from 'cors'

export default class Server {
  private _expressApp: Application;
  private _config: any;
  private _amqp: any;
  private _postgresql: any

  constructor({ config, router, postgresql, Middlewares }: any) {
    this._config = config;
    //this._amqp = amqp;
    this._postgresql = postgresql
    this._expressApp = express();
    this._expressApp.use(morgan('tiny'));
    this._expressApp.use(router)
    this._expressApp.use(cors())
    this._expressApp.use(Middlewares.errorMiddleware)
    this._expressApp.use(errors())
  }

  public async start() {
    await this._expressApp.listen(this._config.SERVER_PORT, () => {
      console.log(`Server running on port: ${this._config.SERVER_PORT}`)
    })

    await this._postgresql.initialize()
      .then(() => {
        console.log('Postgresql DataSource has been initialized');
      })
      .catch((err) => {
        console.error('***** Error during Data Source initialization *****\n', err);
      });

    //await this._amqp.amqpConnection();
    //await this._amqp.amqpConsumer();
  }
}
