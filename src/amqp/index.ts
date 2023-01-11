import amqp, { Connection, Channel } from 'amqplib';
//import { amqpRoute } from '../routes/index';

export default class RabbitMQ {
  private _amqp: any
  private _config: any 
  private _content: any
  private _connection: Connection
  private _channel: Channel

  constructor({ config }: any) {
    this._config = config
    this._amqp = amqp
  }

  public async amqpConnection() {
    try {
      this._connection = await this._amqp.connect(this._config.AMQP_HOSTNAME);
      this._channel = await this._connection.createChannel();
      await this._channel.assertQueue(this._config.AMQP_QUEUE);
      console.log('Rabbitmq server connected');
    } catch (error) {
      console.log('Could not connect to RabbitMQ server\n', error);
    }
  }

  public async amqpConsumer() {
    try {
      
    } catch (error) {
      
    }
    // await this.channel.assertQueue(this.queue);
    // console.log('RabbitMQ consumer waiting for message');
    // await this.channel.consume(this.queue, (message: any) => {
    //   this.content = JSON.parse(message.content.toString());
    //   this.channel.ack(message);
    //   const route = new Route();
    //   route.redirectRequest(this.content);
    // });
  }

  public async amqpProvider(response: any) {
    // await this.channel.assertQueue(this.queue);
    // this.channel.sendToQueue(
    //   this.content.properties.replyTo,
    //   Buffer.from(JSON.stringify(response))
    // );
  }

  public get amqpContent(): object {
    return this._content;
  }
}
