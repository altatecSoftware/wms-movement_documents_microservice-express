import { Request, Response } from "express";


export class DocumentController {
    private _documentService: any

    constructor({DocumentService}: any){
        this._documentService = DocumentService

        this.getAll = this.getAll.bind(this)
        this.get = this.get.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.getByType = this.getByType.bind(this)
    }

    public getAll(req: Request, res: Response){
        console.log('Controller')
        this._documentService.getAll()
        res.status(200).json({
            message: "Documents - Get All"
        })
    }

    public getByType(req: Request, res: Response){
        console.log('Controller')
        this._documentService.get()
        res.status(200).json({
            message: "Documents - Get By Type"
        })
    }

    public get(req: Request, res: Response){
        console.log('Controller')
        this._documentService.get()
        res.status(200).json({
            message: "Documents - Get By Id"
        })
    }

    public async create(req: Request, res: Response){
        // try {
        //     const { body } = req
        //     const result = await this._documentService(body)
        //     res.status(200).json(result)
        // } catch (error) {
            
        // }
        console.log('Controller')
        this._documentService.create()
        res.status(200).json({
            message: "Documents - Create"
        })
    }

    public update(req: Request, res: Response){
        console.log('Controller')
        this._documentService.delete()
        res.status(200).json({
            message: "Documents - Update"
        })
    }

    public delete(req: Request, res: Response){
        console.log('Controller')
        res.status(200).json({
            message: "Documents - Delete"
        })
    }
}