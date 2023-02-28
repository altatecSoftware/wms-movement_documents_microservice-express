import { Router } from "express"

const DocumentRoutes = ({ DocumentController, MovementController, Validations }: any) => {
    const router = Router()

    //CRUD Routes
    router.get('/', DocumentController.getAll)
    router.get('/:id', DocumentController.get)
    router.post('/', Validations.createDocument(), DocumentController.create)
    router.put('/:id', Validations.updateDocument(), DocumentController.update)
    router.delete('/:id', Validations.deleteDocument(), DocumentController.delete)
    //Specific routes 
    router.get('/type/:type', DocumentController.getByType)
    router.post('/status/:id', MovementController.newStatus)

    return router
}

export { DocumentRoutes } 