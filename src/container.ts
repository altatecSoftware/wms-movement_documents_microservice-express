import { createContainer, asClass, InjectionMode, Lifetime } from 'awilix';
import { PostreSQL } from './database/postgresql';
import { RabbitMQ } from './amqp/rabbitmq';
import { documentController } from './modules/documents/controller';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

const containerSetup = () => {
  container.register({
    //Config
    postgres: asClass(PostreSQL, { lifetime: Lifetime.SINGLETON }),
    rabbitmq: asClass(RabbitMQ, { lifetime: Lifetime.SINGLETON }),
    //Document Module
    documentController: asClass(documentController),
    //Entry Order Module
    //Exit Order Module
  });
};

export { container, containerSetup };
