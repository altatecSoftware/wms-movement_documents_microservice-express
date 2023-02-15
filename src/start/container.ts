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
import {
  DocumentService, InboundOrderService, OutboundOrderService, DetailService,
  MovementService, DocumentSignatureService
} from '../services';
//Repositories 
import {
  DocumentRepository, InboundOrderRepository, OutboundOrderRepository,
  DetailRepository, MovementRepository, DocumentSignatureRepository
} from '../repositories';
//Entities
import {
  DetailEntity, DocumentEntity, DocumentSignatureEntity,
  InboundOrderEntity, OutboundOrderEntity, MovementEntity
} from '../entities';

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
    DocumentService: asClass(DocumentService).singleton(),
    InboundOrderService: asClass(InboundOrderService).singleton(),
    OutboundOrderService: asClass(OutboundOrderService).singleton(),
    DetailService: asClass(DetailService).singleton(),
    MovementService: asClass(MovementService).singleton(),
    DocumentSignatureService: asClass(DocumentSignatureService).singleton()
  })
  .register({
    DocumentController: asClass(DocumentController).singleton()
  })
  .register({
    DocumentRoutes: asFunction(DocumentRoutes)
  })
  .register({
    DetailEntity: asValue(DetailEntity),
    DocumentEntity: asValue(DocumentEntity),
    DocumentSignatureEntity: asValue(DocumentSignatureEntity),
    InboundOrderEntity: asValue(InboundOrderEntity),
    OutboundOrderEntity: asValue(OutboundOrderEntity),
    MovementEntity: asValue(MovementEntity)
  })
  .register({
    DocumentRepository: asClass(DocumentRepository).singleton(),
    InboundOrderRepository: asClass(InboundOrderRepository).singleton(),
    OutboundOrderRepository: asClass(OutboundOrderRepository).singleton(),
    DetailRepository: asClass(DetailRepository).singleton(),
    MovementRepository: asClass(MovementRepository).singleton(),
    DocumentSignatureRepository: asClass(DocumentSignatureRepository).singleton()
  })

export default container;
