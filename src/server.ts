import express from 'express';
//Dotenv configuration
import * as dotenv from 'dotenv';
dotenv.config();

export class Server {
  private app: any;
  private server: any;
  private port: any;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT ?? 8080;
    this.setup();
  }

  private setup() {
    //Error Messages
    //Response Message
  }

  public start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}
