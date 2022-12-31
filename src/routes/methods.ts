import { documentController } from '../modules/documents/controller';
const document = new documentController();

export const methods = {
  read: document.getAllDocuments,
  readByType: document.getAllDocumentsByType,
  readById: document.getDocumentById,
  create: document.createDocument,
  update: document.updateDocument,
  delete: document.deleteDocument,
};
