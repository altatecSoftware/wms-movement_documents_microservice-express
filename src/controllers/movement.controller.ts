import { Request, Response } from "express";

export class MovementController {
  private _movementService: any

  constructor({ MovementService }: any) {
    this._movementService = MovementService
    this.newStatus = this.newStatus.bind(this)
  }

  public async newStatus(req: Request, res: Response) {
    try {
      const document_id = req.params.id
      const data = req.body
      const movement = await this._movementService.newStatus(data, document_id)
      res.status(200).send(movement)
    } catch (err: any) {
      res.status(500).send(err.message)
    }
  }
}