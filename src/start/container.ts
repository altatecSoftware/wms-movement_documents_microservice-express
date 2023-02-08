import { createContainer, asClass, InjectionMode, asFunction, asValue } from 'awilix';
//Initial config 
import Server from './server';
import Config from '../config';
//import RabbitMQ from '../amqp';
import Routes from '../routes';
//import PostreSQL from '../database/postgresql';
//Entity Routes
import { InboundOrderRoutes } from '../routes/inboundOrder.routes';
//Controllers
import { InboundOrderController } from '../controllers';
//Services
import { InboundOrderService } from '../services';
//Repositories 
import { InboundOrderRepository } from '../repositories';

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
    InboundOrderRoutes: asFunction(InboundOrderRoutes)
  })
  .register({
    InboundOrderRepository: asClass(InboundOrderRepository).singleton()
  })
  .register({
    InboundOrderService: asClass(InboundOrderService).singleton()
  })
  .register({
    InboundOrderController: asClass(InboundOrderController).singleton()
  })

export default container;
