import { Router } from "express"

const DocumentRoutes = ({ DocumentController, MovementController, Validations }: any) => {
    const router = Router()

    //CRUD Routes
    router.get('/', Validations.getAllDocument(), DocumentController.getAll)
    router.get('/:id', Validations.get(), DocumentController.get)
    router.post('/', Validations.createDocument(), DocumentController.create)
    router.put('/:id', Validations.updateDocument(), DocumentController.update)
    router.delete('/:id', Validations.deleteDocument(), DocumentController.delete)
    //Specific routes 
    router.get('/type/:type', Validations.getByType(), DocumentController.getByType)
    router.post('/status/:id', Validations.createMovement(), MovementController.newStatus)

    return router
}

export { DocumentRoutes } 