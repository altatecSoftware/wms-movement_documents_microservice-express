
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

const createDocument = async (content) => {
  console.log(`Received message from createDocument`);
  console.log(content);
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
