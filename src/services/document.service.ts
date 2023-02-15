import { IDetail, IDocument, IDocumentSignature, IInboundOrder, IMovement } from "../interfaces";

export class DocumentService {
    private _documentRepository: any
    private _details: IDetail[] = []
    private _document: IDocument
    private _inboundOrder: IInboundOrder 
    private _movement: IMovement[] = []
    private _documentSignature: IDocumentSignature[] = []

    constructor({ DocumentRepository }: any) {
        this._documentRepository = DocumentRepository
    }

    public async create(data: any, orderType: any) {
        if (Object.keys(data).length === 0) {
            const error = new Error();
            error.message = "There is not content for the request";
            throw error;
        }

        const isValid = await this._getDocumentType(orderType)
        if (!isValid) {
            const error = new Error();
            error.message = "invalid document type";
            throw error;
        }

        await this._getGoods(data.goods)

        const { priority, description, delivery_signature, received_signature,
            observations, vehicle, license_plate, document_type, contact_id } = data
        this._document = {
            priority, description, delivery_signature, received_signature,
            observations, vehicle, license_plate, document_type, contact_id
        }

        const { destination_warehouse_id, delivered_by, received_by } = data
        this._inboundOrder = { destination_warehouse_id, delivered_by, received_by }

        const { status, area_id } = data
        this._movement.push({ status, area_id })

        const { path } = data
        this._documentSignature.push({ path })


        return this._documentRepository.create(this._document, this._inboundOrder, this._details, this._movement, this._documentSignature)
    }

    private _getDocumentType(orderType: any) {
        const orderTypes = {
            "inbound-order": "inbound_order",
            "outbound-order": "outbound_order"
        }

        for (const key in orderTypes) {
            return key === orderType ? orderTypes[key] : ''
        }
    }

    private _getGoods(goodsList: any) {
        goodsList.map((good: any) => {
            this._details.push(good)
        })
    }
}