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
            count: take,
            page,
            data: {
                documents
            }
        }
    }

    public async getByType(typeDocument: string) {

        const documents = await this._documentRepository.getByType(typeDocument)
        if (!documents.length) {
            return { status: "success", message: `There are no registered documents of type ${typeDocument}` }
        }
        return {
            status: "success",
            data: {
                documents
            }
        }
    }

    public async get(id: any) {
        const document = await this._documentRepository.get(id)
        if (!document) {
            return { status: "success", message: "There is no record with the id: " + id }
        }
        return {
            status: "success",
            data: {
                ...document
            }
        }
    }

    public async create(body: any) {

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


        const document = await this._documentRepository.create(this._document, this._inboundOrder, this._outboundOrder, this._details,
            this._movements, this._documentSignatures)

        return {
            status: "success",
            data: document
        }
    }

    public async update(body: any, id: string) {

        const document = await this._documentRepository.get(id)
        if (!document) {
            return { status: "success", message: "There is no record with the id: " + id }
        }
        return await this._documentRepository.update(document, body, id)
    }

    public async delete(id: string) {
        const document = await this._documentRepository.get(id)
        if (!document) {
            return { status: "success", message: "There is no record with the id: " + id }
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

        return await this._documentRepository.newStatus(body, document_id)
    }
}