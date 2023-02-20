import { Router } from "express"

const DocumentRoutes = ({ DocumentController }: any) => {
    const router = Router()

    //CRUD Routes
    router.get('/', DocumentController.getAll)
    router.get('/:id', DocumentController.get)
    router.post('/', DocumentController.create)
    router.put('/:id', DocumentController.update)
    router.delete('/:id', DocumentController.delete)
    //Specific routes 
    router.post('/status/:id', DocumentController.newStatus)
    router.get('/type/:type', DocumentController.getByType)

    return router
}

export { DocumentRoutes } 