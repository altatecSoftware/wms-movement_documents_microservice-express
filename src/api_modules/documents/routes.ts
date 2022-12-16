import { Router } from 'express';
import {
  createDocument,
  getAllDocuments,
  getDocumentById,
  getAllDocumentsByType,
  updateDocument,
  deleteDocument
} from './controller';

const router = Router();

router.get('/', getAllDocuments);
router.get('/type/:orderType', getAllDocumentsByType);
router.get('/:id', getDocumentById);
router.post('/:orderType', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);

export default router;
