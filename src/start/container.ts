import { createContainer, asClass, InjectionMode, asFunction, asValue } from 'awilix';
//Initial config 
import Server from './server';
import Config from '../config';
import RabbitMQ from '../amqp';
import Routes from '../routes/http.router';
import AmqpRouter from '../routes/amqp.router';
import PostreSQL from '../database/postgresql';
//Controllers
import DocumentController from '../modules/documents/controller';
import DetailController from '../modules/details/controller';
//Services

//Repositories 


const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  server: asClass(Server).singleton(), 
  amqp: asClass(RabbitMQ).singleton(),
  amqpRouter: asClass(AmqpRouter).singleton(),
  router: asFunction(Routes).singleton(),
  config: asValue(Config), 
  postgresql: asClass(PostreSQL).singleton()
})
.register({
  DetailController: asClass(DetailController), 
  DocumentController: asClass(DocumentController)
  // DepartureOrderController: 
  // EntryOrderController: 
  // EventController: 
  // StockCardController: 
})

export default container;
