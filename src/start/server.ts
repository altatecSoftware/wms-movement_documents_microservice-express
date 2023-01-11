import express, { Application } from 'express';
import morgan from 'morgan'

export default class Server {
  private _expressApp: Application;
  private _config: any;
  private _amqp: any; 

  constructor({config, router, amqp}: any) {
    this._config = config;
    this._amqp = amqp;
    this._expressApp = express();
    this._expressApp.use(morgan('tiny'));
    this._expressApp.use(router);
  }

  public async start() {
    await this._expressApp.listen(this._config.SERVER_PORT, () => {
      console.log(`Server running on port: ${this._config.SERVER_PORT}`)
    })

    await this._amqp.amqpConnection();
  }
}
