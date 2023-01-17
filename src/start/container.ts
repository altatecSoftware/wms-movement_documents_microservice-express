import { createContainer, asClass, InjectionMode, asFunction, asValue } from 'awilix';
//Initial config 
import Server from './server';
import Config from '../config';
import RabbitMQ from '../amqp';
import Routes from '../routes/http.router';
import AmqpRouter from '../routes/amqp.router';
import PostreSQL from '../database/postgresql';
//Utils
import { ResponseMethods } from '../utils'
//Controllers
import DocumentController from '../modules/documents/controller';
//Services
import DocumentService from '../modules/documents/service';
//Repositories 
import DocumentRepository from '../modules/documents/repository';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  server: asClass(Server).singleton(),
  amqp: asClass(RabbitMQ).singleton(),
  amqpRouter: asClass(AmqpRouter).singleton(),
  router: asFunction(Routes).singleton(),
  config: asValue(Config),
  postgresql: asClass(PostreSQL).singleton(),
})
  .register({
    DocumentService: asClass(DocumentService).singleton()
  })
  .register({
    DocumentController: asClass(DocumentController)
    // DepartureOrderController: 
    // EntryOrderController: 
    // EventController: 
    // StockCardController: 
  })
  .register({
    DocumentRepository: asClass(DocumentRepository).singleton()
  })
  .register({
    response_methods: asFunction(ResponseMethods),
  })

export default container;
