import { DocumentEntity } from "../entities"
import { IDetail, IDocument, IDocumentSignature, IInboundOrder, IMovement } from "../interfaces"

export class DocumentRepository {
    private _myDataSource: any

    constructor({ postgresql }) {
        this._myDataSource = postgresql
    }

    public async create(documentData: IDocument, inboundOrderData: IInboundOrder, detailData: IDetail[], 
                        movementData: IMovement[], documentSignatureData: IDocumentSignature[]) {
        const documentRepository = this._myDataSource.getRepository(DocumentEntity)
        const entityDocument = await documentRepository.create(documentData)
        
        const documentEntity = { ...entityDocument, inbound_order: inboundOrderData, 
                                detail_id: detailData, movement_id: movementData, document_signature_id: documentSignatureData}

        const result = await documentRepository.save(documentEntity)
        
        return result
    }
}