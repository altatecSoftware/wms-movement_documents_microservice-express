import { IDetail, IDocument, IDocumentSignature, IInboundOrder, IMovement, IOutboundOrder } from "../interfaces"
import { DocumentEntity, InboundOrderEntity, MovementEntity, OutboundOrderEntity } from "../entities"
import { documentTypes } from "../utils"

export class DocumentRepository {
    private _myDataSource: any

    constructor({ postgresql }) {
        this._myDataSource = postgresql
    }

    public async getAll(){
        //queryBuilder or with relations 
        const documents = await this._myDataSource.getRepository(DocumentEntity)
            .createQueryBuilder('doc')
            .leftJoinAndSelect("doc.inbound_order", "in")
            .leftJoinAndSelect("doc.outbound_order", "out")
            .leftJoinAndSelect("doc.details", "det")
            .leftJoinAndSelect("doc.movements", "mov")
            .leftJoinAndSelect("doc.document_signatures", "doc_sig")
            .select(['doc.id', 'doc.priority', 'doc.description', 'doc.delivery_signature', 'doc.received_signature',
                'doc.observations', 'doc.vehicle', 'doc.license_plate', 'doc.document_type', 'doc.contact_id',
                'in.id', 'in.destination_warehouse_id', 'in.delivered_by', 'in.received_by', 'out.id', 'out.origin_warehouse_id',
                'out.delivered_by', 'out.received_by', 'det.id', 'det.unit_price', 'det.total_price', 'det.quantity',
                'det.pending_quantity', 'det.inventory_id', 'det.good_id', 'mov.status', 'mov.area_id', 'mov.id', 
                'doc_sig.path', 'doc_sig.id'])
            .getMany()
            return documents
    }

    public async getByType(document_type: string){
        //queryBuilder or with relations 
        const documents = await this._myDataSource.getRepository(DocumentEntity)
            .createQueryBuilder('doc')
            .leftJoinAndSelect("doc.inbound_order", "in")
            .leftJoinAndSelect("doc.outbound_order", "out")
            .leftJoinAndSelect("doc.details", "det")
            .leftJoinAndSelect("doc.movements", "mov")
            .leftJoinAndSelect("doc.document_signatures", "doc_sig")
            .where("doc.document_type = :document_type", { document_type })
            .select(['doc.id', 'doc.priority', 'doc.description', 'doc.delivery_signature', 'doc.received_signature',
                'doc.observations', 'doc.vehicle', 'doc.license_plate', 'doc.document_type', 'doc.contact_id',
                'in.id', 'in.destination_warehouse_id', 'in.delivered_by', 'in.received_by', 'out.id', 'out.origin_warehouse_id',
                'out.delivered_by', 'out.received_by', 'det.id', 'det.unit_price', 'det.total_price', 'det.quantity',
                'det.pending_quantity', 'det.inventory_id', 'det.good_id', 'mov.status', 'mov.area_id', 'mov.id', 
                'doc_sig.path', 'doc_sig.id'])
            .getMany()  
            return documents
    }

    public async get(id: string) {
        //queryBuilder or with relations 
        const document = await this._myDataSource.getRepository(DocumentEntity)
            .createQueryBuilder('doc')
            .leftJoinAndSelect("doc.inbound_order", "in")
            .leftJoinAndSelect("doc.outbound_order", "out")
            .leftJoinAndSelect("doc.details", "det")
            .leftJoinAndSelect("doc.movements", "mov")
            .leftJoinAndSelect("doc.document_signatures", "doc_sig")
            .where("doc.id = :id", { id })
            .select(['doc.id', 'doc.priority', 'doc.description', 'doc.delivery_signature', 'doc.received_signature',
                'doc.observations', 'doc.vehicle', 'doc.license_plate', 'doc.document_type', 'doc.contact_id',
                'in.id', 'in.destination_warehouse_id', 'in.delivered_by', 'in.received_by', 'out.id', 'out.origin_warehouse_id',
                'out.delivered_by', 'out.received_by', 'det.id', 'det.unit_price', 'det.total_price', 'det.quantity',
                'det.pending_quantity', 'det.inventory_id', 'det.good_id', 'mov.status', 'mov.area_id', 'mov.id', 
                'doc_sig.path', 'doc_sig.id'])
            .getOne()
        return document
    }

    public async create(documentData: IDocument, inboundOrderData: IInboundOrder, outboundOrderData: IOutboundOrder,
        detailData: IDetail[], movementData: IMovement[], documentSignatureData: IDocumentSignature[]) {

        const documentRepository = await this._myDataSource.getRepository(DocumentEntity)
        const entityDocument = await documentRepository.create(documentData)
        const documentEntity = {
            ...entityDocument, inbound_order: inboundOrderData, outbound_order: outboundOrderData,
            details: detailData, movements: movementData, document_signatures: documentSignatureData
        }

        documentData.document_type === documentTypes.INBOUND_ORDER ? delete documentEntity.outbound_order : ''
        documentData.document_type === documentTypes.OUTBOUND_ORDER ? delete documentEntity.inbound_order : ''

        return await documentRepository.save(documentEntity)
    }

    public async update(document: any, data: any, id: string) {
        const documentRepository = await this._myDataSource.getRepository(DocumentEntity)
        const newDocument=  Object.assign(document, data)
        return await documentRepository.save(newDocument);
    }

    public async delete(id: string) {
        let documentAux: any
        let repositoryAux: any
        const documentRepository = await this._myDataSource.getRepository(DocumentEntity);
        const document = await documentRepository.findOne({ where: { id } });
        if(document.document_type === documentTypes.INBOUND_ORDER){
            repositoryAux = await this._myDataSource.getRepository(InboundOrderEntity);
            documentAux = await repositoryAux.findOne({ where: { id: document.inbound_order.id } });
        } else if(document.document_type === documentTypes.OUTBOUND_ORDER){
            repositoryAux = await this._myDataSource.getRepository(OutboundOrderEntity);
            documentAux = await repositoryAux.findOne({ where: { id: document.outbound_order.id } });
        }
        
        return await repositoryAux.remove(documentAux)
    }

    public async newStatus(data: any, document_id: string){
        const movementRepository = await this._myDataSource.getRepository(MovementEntity)
        
        return await movementRepository.save({ ...data, document_id})
    }
}