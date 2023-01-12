import { createContainer, asClass, InjectionMode, asFunction, asValue } from 'awilix';
//Initial config 
import Server from './server';
import Config from '../config';
import RabbitMQ from '../amqp';
import Routes from '../routes/router';
import PostreSQL from '../database/postgresql';
//Controllers

//Services

//Repositories 


const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  server: asClass(Server).singleton(), 
  amqp: asClass(RabbitMQ).singleton(),
  router: asFunction(Routes).singleton(),
  config: asValue(Config), 
  postgresql: asClass(PostreSQL).singleton()
})

export default container;
