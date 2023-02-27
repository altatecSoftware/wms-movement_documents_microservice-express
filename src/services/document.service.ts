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

    public async getAll(){
        const documents = await this._documentRepository.getAll()
        if(!documents){
            return "No registered documents"
        }
        return documents
    }

    public async getByType(typeDocument: string){
        const isValid = await this._isDocumentTypeValid(typeDocument)
        if(!isValid){
            const error = new Error();
            error.message = "invalid document type";
            throw error;
        }
        const documents = await this._documentRepository.getByType(typeDocument)
        if(!documents.length){
            return `There are no registered documents of type ${ typeDocument }`
        }
        return documents
    }
 
    public async get(id: any) {
        const document = await this._documentRepository.get(id)
        if (!document) {
            const error = new Error();
            error.message = "Document not found";
            throw error;
        }
        return document
    }

    public async create(body: any) {
        if (Object.keys(body).length === 0) {
            const error = new Error();
            error.message = "There is not content for the request";
            throw error;
        }

        const isValid = await this._isDocumentTypeValid(body.document_type)
        if (!isValid) {
            const error = new Error();
            error.message = "invalid document type";
            throw error;
        }
        //Details
        this._details = body.details
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
        //Movements
        const { status, area_id } = body
        this._movements = [{ status, area_id }]
        //DocumentSignatures
        const path = [{ path: "http://example.com" }]
        this._documentSignatures = path


        return await this._documentRepository.create(this._document, this._inboundOrder, this._outboundOrder, this._details,
            this._movements, this._documentSignatures)

    }

    public async update(body: any, id: string) {
        if (Object.keys(body).length === 0) {
            const error = new Error();
            error.message = "There is not content for the request";
            throw error;
        }
        const document = await this._documentRepository.get(id)
        if (!document) {
            const error = new Error();
            error.message = "Document not found";
            throw error;
        }
        return await this._documentRepository.update(document, body, id)
    }

    public async delete(id: string) {
        const document = await this._documentRepository.get(id)
        if (!document) {
            const error = new Error();
            error.message = "Document not found";
            throw error;
        }

        return await this._documentRepository.delete(id)
    }

    public async newStatus(body: any, document_id: string) {
        if (Object.keys(body).length === 0) {
            const error = new Error();
            error.message = "There is not content for the request";
            throw error;
        }
        const document = await this._documentRepository.get(document_id)
        if (!document) {
            const error = new Error();
            error.message = "Document not found";
            throw error;
        }

        const isValid = await this._isDocumentStatusValid(body.status)
        if (!isValid) {
            const error = new Error();
            error.message = "invalid document status";
            throw error;
        }

        return await this._documentRepository.newStatus(body, document_id)
    }

    private _isDocumentTypeValid(documentType: string) {
        let isValid: boolean = false
        for (const key in documentTypes) {
            documentTypes[key] === documentType ? isValid = true : ''
        }
        return isValid
    }

    private _isDocumentStatusValid(documentStatus: string) {
        let isValid: boolean = false
        for (const key in statusTypes) {
            statusTypes[key] === documentStatus ? isValid = true : ''
        }
        return isValid
    }
}