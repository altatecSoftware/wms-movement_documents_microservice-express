import amqp, { Connection, Channel } from 'amqplib';
import { Route } from '../routes/index';

export class RabbitMQ {
  private amqp_hostname: any;
  private amqp_server: any;
  private queue: any;
  private content: any;
  private connection: Connection;
  private channel: Channel;

  constructor() {
    this.amqp_hostname = process.env.AMQP_HOSTNAME;
    this.queue = process.env.QUEUE ?? 'documents-microservice';
  }

  public async amqpConnection() {
    this.amqp_server = await amqp.connect(this.amqp_hostname);
    this.connection = await amqp.connect(this.amqp_server);
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(this.queue);
    console.log('Rabbitmq server connected');
  }

  public async amqpConsumer() {
    await this.channel.assertQueue(this.queue);
    console.log('RabbitMQ consumer waiting for message');
    await this.channel.consume(this.queue, (message: any) => {
      this.content = JSON.parse(message.content.toString());
      this.channel.ack(message);
      const route = new Route();
      route.redirectRequest(this.content);
    });
  }

  public async amqpProvider(response: any) {
    await this.channel.assertQueue(this.queue);
    this.channel.sendToQueue(
      this.content.properties.replyTo,
      Buffer.from(JSON.stringify(response))
    );
  }

  public get amqpContent(): object {
    return this.content;
  }
}
