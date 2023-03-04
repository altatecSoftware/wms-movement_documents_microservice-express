import { Router } from "express"

const DocumentRoutes = ({ DocumentController, MovementController, DetailController, Validations }: any) => {
    const router = Router()

    //CRUD Routes
    router.get('/', Validations.getAllDocument(), DocumentController.getAll)
    router.get('/:id', Validations.get(), DocumentController.get)
    router.post('/', Validations.createDocument(), DocumentController.create)
    router.put('/:id', Validations.updateDocument(), DocumentController.update)
    router.delete('/:id', Validations.deleteDocument(), DocumentController.delete)
    router.get('/type/:type', Validations.getByType(), DocumentController.getByType)
    //Movements
    router.post('/new-status/:id', Validations.createMovement(), MovementController.create)
    //Details
    router.post('/new-details/:id', Validations.createDetail(), DetailController.create)

    return router
}

export { DocumentRoutes } 