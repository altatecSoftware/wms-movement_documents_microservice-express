import express from 'express';
//Dotenv configuration
import * as dotenv from 'dotenv';
dotenv.config();
import { containerSetup } from './container';

containerSetup();
export class Server {
  private app: any;
  private server: any;
  private port: any;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT ?? 8080;
  }

  public start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}
