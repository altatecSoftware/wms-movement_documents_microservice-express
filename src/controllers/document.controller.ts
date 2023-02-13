import { Request, Response } from "express";
import { getServiceByDocumentType, createSuccessMessage, createErrorMessage } from "../helpers";

export class DocumentController {
    private _documentService: any
    private _inboundOrderService: any
    private _outboundOrderService: any
    private _detailService: any
    private _movementService: any
    private _documentSignatureService: any

    constructor({ DocumentService, InboundOrderService, OutboundOrderService, DetailService, MovementService, DocumentSignatureService }: any) {
        this._documentService = DocumentService
        this._inboundOrderService = InboundOrderService
        this._outboundOrderService = OutboundOrderService
        this._detailService = DetailService
        this._movementService = MovementService
        this._documentSignatureService = DocumentSignatureService

        this.getAll = this.getAll.bind(this)
        this.get = this.get.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.getByType = this.getByType.bind(this)
    }

    public getAll(req: Request, res: Response) {
        console.log('Controller')
        this._documentService.getAll()
        res.status(200).json({
            message: "Documents - Get All"
        })
    }

    public getByType(req: Request, res: Response) {
        console.log('Controller')
        this._documentService.get()
        res.status(200).json({
            message: "Documents - Get By Type"
        })
    }

    public get(req: Request, res: Response) {
        try {
            const document_id = req.params.id
            const documentGet = this._documentService.get(document_id)
            if(documentGet){
                
                const content = {documentGet}
                const message = createSuccessMessage({ status: "success", content })
                res.status(200).json(message)
            } else {
                const message = createErrorMessage({ status: "success", msg: "document not found" })
                res.status(400).json(message)
            }
        } catch (error) {
            const message = createErrorMessage({ status: "error", msg: "error saving to database" })
            res.json(message)
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const { body } = req
            const documentType = req.params.type

            const documentTypeService = getServiceByDocumentType(documentType, this._inboundOrderService, this._inboundOrderService)
            if (documentTypeService) {
                const { inboundOrderCreated, inbound_order_id, document_type } = await documentTypeService.create(body)
                const { documentCreated, document_id } = await this._documentService.create({ ...body, inbound_order_id, document_type })
                const detailCreated = await this._detailService.create({ ...body, document_id })
                const movementCreated = await this._movementService.create({ ...body, document_id })
                const documentSignatureCreated = await this._documentSignatureService.create({ ...body, document_id })

                const content = { inboundOrderCreated, documentCreated, detailCreated, movementCreated, documentSignatureCreated }
                const message = createSuccessMessage({ status: "success", content })
                res.status(200).json(message)
            } else {
                const message = createErrorMessage({ status: "error", msg: "invalid order type" })
                res.status(400).json(message)
            }
        } catch (error) {
            const message = createErrorMessage({ status: "error", msg: "error saving to database" })
            res.json(message)
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { body } = req
            const order_id = req.params.id

            const documentUpdated = await this._documentService.update({ ...body, order_id })
            const detailUpdate = await this._detailService.update({ ...body, order_id })
            const documentSignatureUpdated = await this._documentSignatureService.update({ ...body, order_id })
            const inboundOrderUpdated = await this._inboundOrderService.update({ ...body, order_id: documentUpdated.inbound_order_id || documentUpdated.outbound_order_id })

            res.status(200).json(detailUpdate)
        } catch (error) {
            console.log(error)
        }
    }

    public delete(req: Request, res: Response) {
        console.log('Controller')
        res.status(200).json({
            message: "Documents - Delete"
        })
    }
}