import { createContainer, asClass, InjectionMode, asFunction, asValue } from 'awilix';
//Initial config 
import Server from './server';
import Config from '../config';
//import RabbitMQ from '../amqp';
import Routes from '../routes';
//import PostreSQL from '../database/postgresql';
//Entity Routes
import { EntryOrderRoutes } from '../routes/entryOrder.routes';
//Controllers
import { EntryOrderController } from '../controllers';
//Services
import { EntryOrderService } from '../services';
//Repositories 
import { EntryOrderRepository } from '../repositories';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container
  .register({
    server: asClass(Server).singleton(),
    //amqp: asClass(RabbitMQ).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(Config),
    //postgresql: asClass(PostreSQL).singleton(),
  })
  .register({
    EntryOrderRoutes: asFunction(EntryOrderRoutes)
  })
  .register({
    EntryOrderRepository: asClass(EntryOrderRepository).singleton()
  })
  .register({
    EntryOrderService: asClass(EntryOrderService).singleton()
  })
  .register({
    EntryOrderController: asClass(EntryOrderController).singleton()
  })

export default container;
