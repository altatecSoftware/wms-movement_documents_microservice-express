import { Document } from "./model";
import { knowTypeDocument } from "./helpers/document-types";
import { documentTypes } from "./utils/document-types";

const getAllDocuments = (content) => {
  console.log(`Received message from getAllDocuments`);
  console.log(content);
};

const getAllDocumentsByType = (content) => {
  console.log(`Received message from getAllDocumentsByType`);
  console.log(content);
};

const getDocumentById = (content) => {
  console.log(`Received message from getDocumentById`);
  console.log(content);
};

const createDocument = (content) => {
  const type = knowTypeDocument(content)
  console.log(type)
};

const updateDocument = (content) => {
  console.log(`Received message from updateDocument`);
  console.log(content);
};

const deleteDocument = (content) => {
  console.log(`Received message from deleteDocument`);
  console.log(content);
};

export {
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
