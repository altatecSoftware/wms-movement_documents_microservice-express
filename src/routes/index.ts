import {
  createDocument,
  deleteDocument,
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  updateDocument,
} from '../modules/documents/controller';
import documentQueues from '../config/rabbitmq/queues';

export const redirectQueuesByRequest = (rabbitmq) => {
  switch (rabbitmq.value) {
    case documentQueues.getAllDocuments:
      getAllDocuments(rabbitmq);
      break;
    case documentQueues.getAllDocumentsByType:
      getAllDocumentsByType(rabbitmq);
      break;
    case documentQueues.getDocumentById:
      getDocumentById(rabbitmq);
      break;
    case documentQueues.createDocument:
      createDocument(rabbitmq);
      break;
    case documentQueues.updateDocument:
      updateDocument(rabbitmq);
      break;
    case documentQueues.deleteDocument:
      deleteDocument(rabbitmq);
      break;
  }
};
