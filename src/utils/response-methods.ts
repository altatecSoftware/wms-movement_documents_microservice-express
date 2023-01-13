import DocumentController from "../modules/documents/controller";
const document = new DocumentController();

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

