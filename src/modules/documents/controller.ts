import * as ServiceDocument from './service';
import { responseMessage } from './helpers/response-messages';
import {documentResponseQueues} from '../../config/rabbitmq/queues';

const getAllDocuments = (rabbitmq) => {
  const response = ServiceDocument.getAllDocuments(rabbitmq.content);
};

const getAllDocumentsByType = (rabbitmq) => {
  const response = ServiceDocument.getAllDocumentsByType(rabbitmq.content);
};

const getDocumentById = (rabbitmq) => {
  const response = ServiceDocument.getDocumentById(rabbitmq.content);
};

const createDocument = (rabbitmq) => {
  const { document_type, data } = JSON.parse(rabbitmq.content)
  if(!document_type || !data){
    responseMessage(rabbitmq.channel, documentResponseQueues.errorMessage, "Error de formato")
  } else {
    responseMessage(rabbitmq.channel, documentResponseQueues.responseMessage, "Todo bien")
  }
  
  //documentTypes.entryOder === document_type ? ServiceDocument.createDocument(rabbitmq.content) : ""
};

const updateDocument = (rabbitmq) => {
  const response = ServiceDocument.updateDocument(rabbitmq.content);
};

const deleteDocument = (rabbitmq) => {
  const response = ServiceDocument.deleteDocument(rabbitmq.content);
};

export {
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
