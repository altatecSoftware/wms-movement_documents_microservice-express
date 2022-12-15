import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.send('List of all documents!!'))
router.get('/type/:type', (req, res) => res.send('List of documents by type: ' + req.params.type))
router.get('/:id', (req, res) => res.send('Document found: ' + req.params.id))
router.post('/:type', (req, res) => res.send(req.params.type + ' Document Created!!'))
router.put('/:id', (req, res) => res.send('Document updated: ' + req.params.id))
router.delete('/:id', (req, res) => res.send('Document deleted: ' + req.params.id))

export default router