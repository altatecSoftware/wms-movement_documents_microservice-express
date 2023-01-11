import express, { Request, Response } from 'express'
import cors from 'cors'

const Routes = () => {
    const router = express.Router()

    router.use('/health', (req: Request, res: Response) => {
        res.status(200).json('OK')
    })

    return router
}

export default Routes;