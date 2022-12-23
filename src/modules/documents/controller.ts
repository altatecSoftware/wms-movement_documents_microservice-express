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
  const { document_type, document, channel } = JSON.parse(rabbitmq.content);
  if (!document_type || !document) {
    responseMessage(
      rabbitmq.channel,
      documentResponseQueues.errorMessage,
      requestFormatError
    );
    return;
  }

  _selectServiceByDocumentType(document_type, document, channel)

};

const updateDocument = (rabbitmq) => {
  const response = ServiceDocument.updateDocument(rabbitmq.content);
};

const deleteDocument = (rabbitmq) => {
  const response = ServiceDocument.deleteDocument(rabbitmq.content);
};

const _selectServiceByDocumentType = async (document_type, document, channel) => {
  switch (document_type) {
    case documentTypes.entryOder:
      const entryOrderId = await ServiceEntryOrder.createEntryOrder(document)
      ServiceDocument.createDocument(document, entryOrderId, document_type)
      break;
    case documentTypes.exitOrder:
      const exitOrderId = await ServiceExitOrder.createExitOrder(document)
      ServiceDocument.createDocument(document, exitOrderId, document_type)
      break;
    default:
      responseMessage(
        channel,
        documentResponseQueues.errorMessage,
        invalidDocumentError
      );
      break;
  }
}

export {
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
