import { Router } from "express"

const InboundOrderRoutes = ({ InboundOrderController }: any) => {
    const router = Router()

    router.get('/', InboundOrderController.getAll)
    router.get('/:id', InboundOrderController.get)
    router.post('/', InboundOrderController.create)
    router.put('/:id', InboundOrderController.update)
    router.delete('/:id', InboundOrderController.delete)

    return router
}

export { InboundOrderRoutes } 