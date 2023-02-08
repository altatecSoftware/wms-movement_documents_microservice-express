import { Router } from "express"

const EntryOrderRoutes = ({ EntryOrderController }: any) => {
    const router = Router()

    router.get('/', EntryOrderController.getAll)
    router.get('/:id', EntryOrderController.get)
    router.post('/', EntryOrderController.create)
    router.put('/:id', EntryOrderController.update)
    router.delete('/:id', EntryOrderController.delete)

    return router
}

export { EntryOrderRoutes } 