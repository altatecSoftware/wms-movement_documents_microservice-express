import {
  createDocument,
  deleteDocument,
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  updateDocument,
} from '../modules/documents/controller';

export const redirectQueuesByRequest = (key, queue, content) => {
  switch (key) {
    case 'getAllDocuments':
      getAllDocuments(queue, content);
      break;
    case 'getAllDocumentsByType':
      getAllDocumentsByType(queue, content);
      break;
    case 'getDocumentById':
      getDocumentById(queue, content);
      break;
    case 'createDocument':
      createDocument(queue, content);
      break;
    case 'updateDocument':
      updateDocument(queue, content);
      break;
    case 'deleteDocument':
      deleteDocument(queue, content);
      break;
  }
};
