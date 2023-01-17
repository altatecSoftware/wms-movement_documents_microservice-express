
export const ResponseMethods = ({ DocumentController }: any) => {

  const reponse_methods = {
    document: {
      read: DocumentController.getAllDocuments,
      readbytype: DocumentController.getAllDocumentsByType,
      readbyid: DocumentController.getDocumentById,
      create: DocumentController.createDocument,
      update: DocumentController.updateDocument,
      delete: DocumentController.deleteDocument
    },
    details: {

    },
    events: {

    },
    stock_cards: {

    }
  };

  return reponse_methods
}





