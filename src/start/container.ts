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
import { DocumentService } from '../services';
//Repositories 
import { DocumentRepository } from '../repositories';
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
    DocumentController: asClass(DocumentController).singleton(),
    DocumentRepository: asClass(DocumentRepository).singleton(),
  })
  .register({
    DocumentRoutes: asFunction(DocumentRoutes)
  })

export default container;
