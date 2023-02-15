import { Request, Response } from "express";

export class DocumentController {
    private _documentService: any

    constructor({ DocumentService }: any) {
        this._documentService = DocumentService

        this.getAll = this.getAll.bind(this)
        this.get = this.get.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.getByType = this.getByType.bind(this)
    }

    public getAll(req: Request, res: Response) {

    }

    public getByType(req: Request, res: Response) {

    }

    public get(req: Request, res: Response) {

    }

    public async create(req: Request, res: Response) {
        try {
            const data = req.body
            const orderType = req.params.type
            const document = await this._documentService.create(data, orderType)
            res.status(200).send(document)
        } catch (err: any) {
            res.status(500).send(err.message)
        }
    }

    public async update(req: Request, res: Response) {

    }

    public delete(req: Request, res: Response) {

    }
}