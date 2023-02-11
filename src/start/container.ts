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
import { DetailEntity, DocumentEntity, DocumentSignatureEntity, 
         InboundOrderEntity, OutboundOrderEntity, MovementEntity } from '../entities';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container
  .register({
    server: asClass(Server).singleton(),
    //amqp: asClass(RabbitMQ).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(Config),
    postgresql: asFunction(PostreSQL).singleton(),
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
    DetailEntity: asClass(DetailEntity).singleton(),
    DocumentEntity: asClass(DocumentEntity).singleton(),
    DocumentSignatureEntity: asClass(DocumentSignatureEntity).singleton(),
    InboundOrderEntity: asClass(InboundOrderEntity).singleton(), 
    OutboundOrderEntity: asClass(OutboundOrderEntity).singleton(),
    MovementEntity: asClass(MovementEntity).singleton()
  })

export default container;
