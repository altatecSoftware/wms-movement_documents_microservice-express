import express, { Request, Response, Router } from 'express'

const Routes = ({ DocumentRoutes }: any) => {
    const baseUrl = '/api'
    const router = Router()
    const apiRouter = Router()

    router.use(express.json())
    
    //Route for unit test and microservice status
    router.use('/health', (req: Request, res: Response) => {
        res.status(200).json('OK')
    })

    router.use('/documents', DocumentRoutes)

    apiRouter.use(baseUrl, router)

    return apiRouter
}

export default Routes;