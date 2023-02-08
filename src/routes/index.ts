import { Request, Response, Router } from 'express'
const baseUrl = '/api'

const Routes = ({ InboundOrderRoutes }: any) => {
    const router = Router()
    const apiRouter = Router()

    //Route for unit test and microservice status
    router.use('/health', (req: Request, res: Response) => {
        res.status(200).json('OK')
    })

    router.use('/inbound-orders', InboundOrderRoutes)
    //router.use('/departure-orders', DepartureOrderRoutes)

    apiRouter.use(baseUrl, router)

    return apiRouter
}

export default Routes;