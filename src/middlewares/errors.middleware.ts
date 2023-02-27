import { isCelebrateError } from 'celebrate'
import { NextFunction, Request, Response } from 'express'

interface IErrorResponse {
  status: number
  message?: string | object | any
}

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction): any => {
  let httpStatus = err?.status ?? 500
  if (isCelebrateError(err)) {
    httpStatus = 400
    const response: IErrorResponse = {
      status: httpStatus
    }

    if (err.details.has('params')) {
      response.message = err.details.get('params')?.details[0].message
    }

    if (err.details.has('body')) {
      response.message = err.details.get('body')?.details[0].message
    }

    return res.status(httpStatus).send(response)
  }

  if (process.env.NODE_ENV !== 'production') {
    return res.status(httpStatus).send({
      message: err.message,
      status: 'error'
    })
  }

  return res.status(httpStatus).send({
    message: 'Internal server error',
    status: 'error'
  })
}
