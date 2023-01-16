import DocumentController from "../modules/documents/controller";
import DocumentService from "../modules/documents/service";

const service = new DocumentService()
const document = new DocumentController(service);

export const Methods = {
  document: {
    read: document.getAllDocuments,
    readByType: document.getAllDocumentsByType,
    readById: document.getDocumentById,
    create: document.createDocument,
    update: document.updateDocument,
    delete: document.deleteDocument,
  },
  details : {

  },
  events : {

  },
  stock_cards: {

  }
};

