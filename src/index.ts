import { container } from './container';

const main = async () => {
  try {
    container.cradle.server.start();
    await container.cradle.rabbitmq.amqpConnection();
    await container.cradle.postgres.connection();
  } catch (error) {
    console.log(error);
  }
};

main();
