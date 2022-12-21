const documentRequestQueues = {
  getAllDocuments       : "wmapache:get_all_documents", 
  getAllDocumentsByType : "wmapache:get_all_documents_by_type",
  getDocumentById       : "wmapache:get_document_by_id",
  createDocument        : "wmapache:create_document",
  updateDocument        : "wmapache:update_document",
  deleteDocument        : "wmapache:delete_document",
}

const documentResponseQueues = {
  responseMessage       : "wmapache:response_message",
  errorMessage          : "wmapache:error_message"
}

export {
  documentRequestQueues,
  documentResponseQueues
}