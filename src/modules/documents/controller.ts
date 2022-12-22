import * as ServiceDocument from './service';
import * as ServiceEntryOrder from '../entry_orders/service';
import * as ServiceExitOrder from '../exit_orders/service';
import { responseMessage } from './helpers/response-messages';
import { documentResponseQueues } from '../../config/rabbitmq/queues';
import { requestFormatError, documentTypes, invalidDocumentError } from './utils/index';

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
  const { document_type, document } = JSON.parse(rabbitmq.content);
  if (!document_type || !document) {
    responseMessage(
      rabbitmq.channel,
      documentResponseQueues.errorMessage,
      requestFormatError
    );
    return;
  }

  switch (document_type) {
    case documentTypes.entryOder:
      ServiceEntryOrder.createEntryOrder(document)
      break;
    case documentTypes.exitOrder:
      ServiceExitOrder.createExitOrder(document)
      break;
    default:
      responseMessage(
        rabbitmq.channel,
        documentResponseQueues.errorMessage,
        invalidDocumentError
      );
      break;
  }
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
