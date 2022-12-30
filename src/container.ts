import { createContainer, asClass, InjectionMode, asValue } from 'awilix';
import { PostreSQL } from './database/postgresql';
import { RabbitMQ } from './amqp/rabbitmq';
import { Server } from './server';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  //Config
  postgres: asClass(PostreSQL),
  rabbitmq: asClass(RabbitMQ),
  server: asClass(Server),
});

export { container };
