import { createContainer, asClass, InjectionMode, asFunction, asValue } from 'awilix';
//Initial config 
import Server from './server';
import Config from '../config';
//import RabbitMQ from '../amqp';
import Routes from '../routes';
import PostreSQL from '../database/postgresql';
//Entity Routes
import { DocumentRoutes } from '../routes/document.routes';
//Controllers
import { DocumentController } from '../controllers';
//Services
import { DocumentService, InboundOrderService, OutboundOrderService } from '../services';
//Repositories 
import { DocumentRepository, InboundOrderRepository, OutboundOrderRepository } from '../repositories';
//Models
import { DetailModel, DocumentModel, DocumentSignatureModel, 
         InboundOrderModel, OutboundOrderModel, MovementModel } from '../models';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container
  .register({
    server: asClass(Server).singleton(),
    //amqp: asClass(RabbitMQ).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(Config),
    postgresql: asClass(PostreSQL).singleton(),
  })
  .register({
    DocumentRoutes: asFunction(DocumentRoutes)
  })
  .register({
    DocumentRepository: asClass(DocumentRepository).singleton(),
    InboundOrderRepository: asClass(InboundOrderRepository).singleton(),
    OutboundOrderRepository: asClass(OutboundOrderRepository).singleton()
  })
  .register({
    DocumentService: asClass(DocumentService).singleton(),
    InboundOrderService: asClass(InboundOrderService).singleton(),
    OutboundOrderService: asClass(OutboundOrderService).singleton()
  })
  .register({
    DocumentController: asClass(DocumentController).singleton()
  })
  .register({
    DetailModel: asClass(DetailModel).singleton(),
    DocumentModel: asClass(DocumentModel).singleton(),
    DocumentSignatureModel: asClass(DocumentSignatureModel).singleton(),
    InboundOrderModel: asClass(InboundOrderModel).singleton(), 
    OutboundOrderModel: asClass(OutboundOrderModel).singleton(),
    MovementModel: asClass(MovementModel).singleton()
  })

export default container;
