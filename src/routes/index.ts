import {
  createDocument,
  deleteDocument,
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  updateDocument,
} from '../modules/documents/controller';
import {documentRequestQueues} from '../config/rabbitmq/queues';

export const redirectQueuesByRequest = ({queue, ...rabbitmq}) => {
  switch (queue) {
    case documentRequestQueues.getAllDocuments:
      getAllDocuments(rabbitmq);
      break;
    case documentRequestQueues.getAllDocumentsByType:
      getAllDocumentsByType(rabbitmq);
      break;
    case documentRequestQueues.getDocumentById:
      getDocumentById(rabbitmq);
      break;
    case documentRequestQueues.createDocument:
      createDocument(rabbitmq);
      break;
    case documentRequestQueues.updateDocument:
      updateDocument(rabbitmq);
      break;
    case documentRequestQueues.deleteDocument:
      deleteDocument(rabbitmq);
      break;
  }
};
