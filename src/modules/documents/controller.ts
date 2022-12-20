import * as Service from './service';

const getAllDocuments = (rabbitmq) => {
  const response = Service.getAllDocuments(rabbitmq.content);
};

const getAllDocumentsByType = (rabbitmq) => {
  const response = Service.getAllDocumentsByType(rabbitmq.content);
};

const getDocumentById = (rabbitmq) => {
  const response = Service.getDocumentById(rabbitmq.content);
};

const createDocument = async(rabbitmq) => {
  const response = Service.createDocument(rabbitmq.content);

//   rabbitmq.channel.sendToQueue(rabbitmq.queue, Buffer.from(
//     JSON.stringify("Documento Creado")
// ),{ 
//     persistent: true
// })
  
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
