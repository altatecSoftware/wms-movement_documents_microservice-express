import { Request, Response } from "express";


export class EntryOrderController {
    private _entryOrderService: any

    constructor({EntryOrderService}: any){
        this._entryOrderService = EntryOrderService

        this.getAll = this.getAll.bind(this)
        this.get = this.get.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    public getAll(req: Request, res: Response){
        console.log('Controller')
        this._entryOrderService.getAll()
        res.status(200).json({
            message: "EntryOrders - Get All"
        })
    }

    public get(req: Request, res: Response){
        console.log('Controller')
        this._entryOrderService.get()
        res.status(200).json({
            message: "EntryOrders - Get"
        })
    }

    public create(req: Request, res: Response){
        console.log('Controller')
        this._entryOrderService.create()
        res.status(200).json({
            message: "EntryOrders - Create"
        })
    }

    public update(req: Request, res: Response){
        console.log('Controller')
        this._entryOrderService.delete()
        res.status(200).json({
            message: "EntryOrders - Update"
        })
    }

    public delete(req: Request, res: Response){
        console.log('Controller')
        res.status(200).json({
            message: "EntryOrders - Delete"
        })
    }
}