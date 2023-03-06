import { IDetail, IDocument, IDocumentSignature, IInboundOrder, IMovement, IOutboundOrder } from "../interfaces";
import { documentTypes, statusTypes } from "../utils";

export class DocumentService {
    private _documentRepository: any
    private _details: IDetail[] = []
    private _document: IDocument
    private _inboundOrder: IInboundOrder
    private _outboundOrder: IOutboundOrder
    private _movements: IMovement[] = []
    private _documentSignatures: IDocumentSignature[] = []

    constructor({ DocumentRepository }: any) {
        this._documentRepository = DocumentRepository
    }

    public async getAll(take: number, skip: number, page: number) {
        const documents = await this._documentRepository.getAll(take, skip)

        return {
            status: "success",
            data: {
                count: documents.length,
                documents,
                size: take,
                page
            },
        }
    }

    public async getByType(typeDocument: string, take: number, page: number, skip: number) {
        const documents = await this._documentRepository.getByType(typeDocument, take, skip)

        return {
            status: "success",
            data: {
                count: documents.length,
                documents,
                size: take,
                page
            },
        }
    }

    public async get(id: any) {
        const document = await this._documentRepository.get(id)
        if (!document) {
            return { status: "success", message: "The document with the id: " + id + " does not exist" }
        }
        return {
            status: "success",
            data: {
                ...document
            }
        }
    }

    public async create(body: any) {
        let data: any = {}

        //Documents
        const { priority, description, delivery_signature, received_signature,
            observations, vehicle, license_plate, document_type, contact_id } = body
        this._document = {
            priority, description, delivery_signature, received_signature,
            observations, vehicle, license_plate, document_type, contact_id
        }
        //InboundOrders / OutboundOrders
        const { delivered_by, received_by, origin_warehouse_id, destination_warehouse_id } = body
        this._inboundOrder = { destination_warehouse_id, delivered_by, received_by }
        this._outboundOrder = { origin_warehouse_id, delivered_by, received_by }
        //Details
        this._details = body.details
        //Movements
        const { area_id } = body
        this._movements = [{ status: statusTypes.PROCESS_TO_CONFIRM, area_id }]
        //DocumentSignatures
        const path = [{ path: "http://example.com" }]
        this._documentSignatures = path

        data = { ...this._document }
        switch (data.document_type) {
            case documentTypes.INBOUND_ORDER:
                data.inbound_order = this._inboundOrder
                break;
            case documentTypes.OUTBOUND_ORDER:
                data.outbound_order = this._outboundOrder
                break;
        }
        data.details = this._details
        data.movements = this._movements
        data.document_signatures = this._documentSignatures

        const document = await this._documentRepository.create(data)

        return {
            status: "success",
            data: document
        }
    }

    public async update(body: any, id: string) {
        if (Object.entries(body).length === 0) {
            return { status: "success", message: "No data to update" }
        }
        const document = await this._documentRepository.get(id)
        if (!document) {
            return { status: "success", message: "The document with the id: " + id + " does not exist" }
        }
        const updateDocument = this._createNewDocumentToUpdate(body, document)

        return await this._documentRepository.update(updateDocument)
    }

    public async delete(id: string) {
        const document = await this._documentRepository.get(id)
        if (!document) {
            return { status: "success", message: "The document with the id: " + id + " does not exist" }
        }

        await this._documentRepository.delete(id)
        return {
            status: "success",
            message: "Document with id: " + id + " deleted"
        }
    }

    private _createNewDocumentToUpdate({ inbound_order, outbound_order, details, ...dataDocument }: any, document: any): Object {
        let newDocument: any = {}
        let newInboundOrder: any = {}
        let newOutboundOrder: any = {}

        newInboundOrder = Object.assign({}, document.inbound_order, inbound_order)
        newOutboundOrder = Object.assign({}, document.outbound_order, outbound_order)
        newDocument = Object.assign({}, document, dataDocument)
        newDocument.details = details

        switch (document.document_type) {
            case documentTypes.INBOUND_ORDER:
                newDocument.inbound_order = newInboundOrder
                break;
        
            case documentTypes.OUTBOUND_ORDER:
                newDocument.outbound_order = newOutboundOrder
                break;
        }

        return newDocument
    }

}