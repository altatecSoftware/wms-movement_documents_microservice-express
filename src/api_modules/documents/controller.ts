import { Response, Request } from 'express';

const getAllDocuments = (req: Request, res: Response) => {
  res.json({
    message: 'List of all documents!!',
  });
};

const getAllDocumentsByType = (req: Request, res: Response) => {
  const type = req.params.orderType;
  res.json({
    message: `List of documents by type: ${type}`,
  });
};

const getDocumentById = (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({
    message: `Document with id: ${id} found!!`,
  });
};

const createDocument = (req: Request, res: Response) => {
  const type = req.params.orderType;
  res.json({
    message: `${type} Document created!!`,
  });
};

const updateDocument = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Document with id: ${id} updated!!`,
  });
};

const deleteDocument = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Document with id: ${id} deleted!!`,
  });
};

export {
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
