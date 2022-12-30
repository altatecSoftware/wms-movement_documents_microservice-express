import { createContainer, asClass, InjectionMode, Lifetime } from 'awilix';
import { PostreSQL } from './database/postgresql';
import { RabbitMQ } from './amqp/rabbitmq';
import { Server } from './server';
import { Route } from './routes';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

container.register({
  //Config
  postgres: asClass(PostreSQL, { lifetime: Lifetime.SINGLETON }),
  rabbitmq: asClass(RabbitMQ, { lifetime: Lifetime.SINGLETON }),
  routes: asClass(Route),
  server: asClass(Server),
});

export { container };
