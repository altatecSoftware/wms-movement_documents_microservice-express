import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => res.send('Entry Orders Created!!'))
router.get('/', (req, res) => res.send('Entry Orders List!!'))
router.get('/:id', (req, res) => res.send('Entry Order found!!'))
router.put('/:id', (req, res) => res.send('Entry Order updated!!'))
router.delete('/:id', (req, res) => res.send('Entry Order deleted!!'))

export default router