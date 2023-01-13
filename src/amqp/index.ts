import amqp, { Connection, Channel } from 'amqplib';

export default class RabbitMQ {
  private _amqp: any
  private _amqpRouter: any
  private _config: any 
  private _content: any
  private _connection: Connection
  private _channel: Channel

  constructor({ config, amqpRouter }: any) {
    this._config = config
    this._amqp = amqp
    this._amqpRouter = amqpRouter
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
      await this._channel.consume(this._config.AMQP_QUEUE, (message: any) => {
        if(message){
          this._content = JSON.parse(message.content.toString());
          this._channel.ack(message);
          this._amqpRouter.redirectRequest(this._content);
          //this._connection.close();
        }
      })
    } catch (error) {
      console.log('Could not connect to RabbitMQ server\n', error);
    }
  }

  public async amqpProvider(response: any) {
    try {
      this._connection = await this._amqp.connect(this._config.AMQP_HOSTNAME);
      this._channel = await this._connection.createChannel();
      await this._channel.assertQueue(this._config.AMQP_QUEUE); 
      this._channel.sendToQueue(
        this._content.properties.replyTo, 
        Buffer.from(JSON.stringify(response))
      )
    } catch (error) {
      console.log('Could not connect to RabbitMQ server\n', error);
    }
  }

  public get amqpContent(): object {
    return this._content;
  }
}
