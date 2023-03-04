import { Request, Response } from "express";

export class DetailController {
  private _detailService: any

  constructor({ DetailService }: any) {
    this._detailService = DetailService
    this.create = this.create.bind(this)
  }

  public async create(req: Request, res: Response) {
    try {
      const document_id = req.params.id
      const data = req.body
      const movement = await this._detailService.create(data, document_id)
      res.status(200).send(movement)
    } catch (err: any) {
      res.status(500).send(err.message)
    }
  }
}