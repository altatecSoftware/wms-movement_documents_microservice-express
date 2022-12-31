import { container } from './container';
import { Server } from './server';

const main = async () => {
  try {
    const server = new Server();
    server.start();
    await container.cradle.postgres.connection();
    await container.cradle.rabbitmq.amqpConnection();
    await container.cradle.rabbitmq.amqpConsumer();
  } catch (error) {
    console.log(error);
  }
};

main();
