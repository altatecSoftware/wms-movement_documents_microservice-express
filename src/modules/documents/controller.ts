const getAllDocuments = (queue, content) => {
  console.log(`Received message from  ${queue} queue from getAllDocuments`);
  console.log(content);
};

const getAllDocumentsByType = (queue, content) => {
  console.log(`Received message from  ${queue} queue from getAllDocumentsByType`);
  console.log(content);
};

const getDocumentById = (queue, content) => {
  console.log(`Received message from  ${queue} queue from getDocumentById`);
  console.log(content);
};

const createDocument = (queue, content) => {
  console.log(`Received message from  ${queue} queue from createDocument`);
  console.log(content);
};

const updateDocument = (queue, content) => {
  console.log(`Received message from  ${queue} queue from updateDocument`);
  console.log(content);
};

const deleteDocument = (queue, content) => {
  console.log(`Received message from  ${queue} queue from deleteDocument`);
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
