import {
  createDocument,
  deleteDocument,
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  updateDocument,
} from '../modules/documents/controller';

export const methods = {
  read: getAllDocuments,
  readByType: getAllDocumentsByType,
  readById: getDocumentById,
  create: createDocument,
  update: updateDocument,
  delete: deleteDocument,
};
