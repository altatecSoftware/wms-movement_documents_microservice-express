import * as Service from './service';
import { knowTypeDocument } from './helpers/document-types';
import { documentTypes } from './utils/document-types';

const getAllDocuments = (rabbitmq) => {
  const response = Service.getAllDocuments(rabbitmq.content);
};

const getAllDocumentsByType = (rabbitmq) => {
  const response = Service.getAllDocumentsByType(rabbitmq.content);
};

const getDocumentById = (rabbitmq) => {
  const response = Service.getDocumentById(rabbitmq.content);
};

const createDocument = (rabbitmq) => {
  const type = knowTypeDocument(rabbitmq.content)
  console.log(type)  
};

const updateDocument = (rabbitmq) => {
  const response = Service.updateDocument(rabbitmq.content);
};

const deleteDocument = (rabbitmq) => {
  const response = Service.deleteDocument(rabbitmq.content);
};

export {
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
