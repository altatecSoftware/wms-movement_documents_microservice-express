import DocumentController from "../modules/documents/controller";
const document = new DocumentController();

const DocumentMethods = {
  read: document.getAllDocuments,
  readByType: document.getAllDocumentsByType,
  readById: document.getDocumentById,
  create: document.createDocument,
  update: document.updateDocument,
  delete: document.deleteDocument,
};

const DetailMethods = {

}

const EventsMethods = {

}

const StockCardMethods = {
  
}

export {
  DocumentMethods
}
