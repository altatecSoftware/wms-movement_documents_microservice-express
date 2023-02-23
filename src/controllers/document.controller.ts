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
        this.newStatus = this.newStatus.bind(this)
    }

    public getAll(req: Request, res: Response) {
        res.status(200).json({
            message: "Hello World!"
        })
    }

    public getByType(req: Request, res: Response) {

    }

    public async get(req: Request, res: Response) {
        try {
            const document_id = req.params.id
            const document = await this._documentService.get(document_id)
            res.status(200).send(document)
        } catch (err: any) {
            res.status(500).send(err.message)
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const data = req.body
            const documentType = req.params.type
            const document = await this._documentService.create(data, documentType)
            res.status(200).send(document)
        } catch (err: any) {
            res.status(500).send(err.message)
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const data = req.body
            const document_id = req.params.id
            const document = await this._documentService.update(data, document_id)
            res.status(200).send(document)
        } catch (err: any) {
            res.status(500).send(err.message)
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const document_id = req.params.id
            const document = await this._documentService.delete(document_id)
            res.status(200).send(document)
        } catch (err: any) {
            res.status(500).send(err.message)
        }
    }

    public async newStatus(req: Request, res: Response){
        try {
            const document_id = req.params.id
            const data = req.body
            const movement = await this._documentService.newStatus(data, document_id)
            res.status(200).send(movement)
        } catch (err: any) {
            res.status(500).send(err.message)
        }
    }
}