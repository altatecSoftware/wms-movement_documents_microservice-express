import { Router } from "express"

const DocumentRoutes = ({ DocumentController, Validations }: any) => {
    const router = Router()

    //CRUD Routes
    router.get('/', DocumentController.getAll)
    router.get('/:id', DocumentController.get)
    router.post('/', Validations.createDocument(), DocumentController.create)
    router.put('/:id', Validations.updateDocument(), DocumentController.update)
    router.delete('/:id', Validations.deleteDocument(), DocumentController.delete)
    //Specific routes 
    router.post('/status/:id',  DocumentController.newStatus)
    router.get('/type/:type', DocumentController.getByType)

    return router
}

export { DocumentRoutes } 