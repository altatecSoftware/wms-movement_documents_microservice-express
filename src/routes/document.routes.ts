import { Router } from "express"

const DocumentRoutes = ({ DocumentController }: any) => {
    const router = Router()

    router.get('/', DocumentController.getAll)
    router.get('/type/:type', DocumentController.getByType)
    router.get('/:id', DocumentController.get)
    router.post('/:type', DocumentController.create)
    router.put('/:id', DocumentController.update)
    router.delete('/:id', DocumentController.delete)

    return router
}

export { DocumentRoutes } 