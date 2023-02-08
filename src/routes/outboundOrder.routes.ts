import Router from 'express'

const DepartureOrderRoutes = ({ DepartureOrderController }: any) => {
    const router = Router()

    router.get('/', DepartureOrderController.getAll)
    router.get('/:id', DepartureOrderController.get)
    router.post('/', DepartureOrderController.create)
    router.put('/:id', DepartureOrderController.update)
    router.delete('/:id', DepartureOrderController.delete)

    return router
}

export default DepartureOrderRoutes