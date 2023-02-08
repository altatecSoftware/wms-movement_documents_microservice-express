import { Request, Response } from "express";


export class InboundOrderController {
    private _inboundOrderService: any

    constructor({InboundOrderService}: any){
        this._inboundOrderService = InboundOrderService

        this.getAll = this.getAll.bind(this)
        this.get = this.get.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    public getAll(req: Request, res: Response){
        console.log('Controller')
        this._inboundOrderService.getAll()
        res.status(200).json({
            message: "EntryOrders - Get All"
        })
    }

    public get(req: Request, res: Response){
        console.log('Controller')
        this._inboundOrderService.get()
        res.status(200).json({
            message: "EntryOrders - Get"
        })
    }

    public create(req: Request, res: Response){
        console.log('Controller')
        this._inboundOrderService.create()
        res.status(200).json({
            message: "EntryOrders - Create"
        })
    }

    public update(req: Request, res: Response){
        console.log('Controller')
        this._inboundOrderService.delete()
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