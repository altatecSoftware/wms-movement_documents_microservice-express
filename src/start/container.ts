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
import { DocumentController, MovementController } from '../controllers';
//Services
import { DocumentService, MovementService } from '../services';
//Repositories 
import { DocumentRepository, MovementRepository } from '../repositories';
//Entities
import {
  DetailEntity, DocumentEntity, DocumentSignatureEntity,
  InboundOrderEntity, OutboundOrderEntity, MovementEntity
} from '../entities';
//Validations
import * as Validations from '../validations'
//Middlewares
import * as Middlewares from '../middlewares'

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
    Validations: asValue(Validations),
    Middlewares: asValue(Middlewares)
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
    DocumentService: asClass(DocumentService).singleton(),
    MovementService: asClass(MovementService).singleton()
  })
  .register({
    DocumentController: asClass(DocumentController).singleton(),
    MovementController: asClass(MovementController).singleton(),
  })
  .register({
    DocumentRepository: asClass(DocumentRepository).singleton(),
    MovementRepository: asClass(MovementRepository).singleton(),
  })
  .register({
    DocumentRoutes: asFunction(DocumentRoutes)
  })

export default container;
