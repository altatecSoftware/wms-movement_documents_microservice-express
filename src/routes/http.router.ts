import express, { Request, Response } from 'express'

const Routes = () => {
    const router = express.Router()

    router.use('/health', (req: Request, res: Response) => {
        res.status(200).json('OK')
    })

    return router
}

export default Routes;