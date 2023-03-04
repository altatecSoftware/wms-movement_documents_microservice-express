import { DocumentEntity, InboundOrderEntity, MovementEntity, OutboundOrderEntity } from "../entities"
import { documentTypes } from "../utils"

export class DocumentRepository {
    private _myDataSource: any
    private _documentEntity: DocumentEntity
    private _inboundOrderEntity: InboundOrderEntity
    private _outboundOrderEntity: OutboundOrderEntity

    constructor({ postgresql, DocumentEntity, InboundOrderEntity, OutboundOrderEntity }) {
        this._myDataSource = postgresql
        this._documentEntity = DocumentEntity
        this._inboundOrderEntity = InboundOrderEntity
        this._outboundOrderEntity = OutboundOrderEntity
    }

    public async getAll(take: number, skip: number) {
        //queryBuilder or with relations 
        const documents = await this._myDataSource.getRepository(this._documentEntity)
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
            .take(take)
            .skip(skip)
            .getMany()
        return documents
    }

    public async getByType(document_type: string, take: number, skip: number) {
        //queryBuilder or with relations 
        const documents = await this._myDataSource.getRepository(this._documentEntity)
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
            .take(take)
            .skip(skip)
            .getMany()
        return documents
    }

    public async get(id: string) {
        //queryBuilder or with relations 
        const document = await this._myDataSource.getRepository(this._documentEntity)
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

    public async create(documentData: any) {

        const documentRepository = await this._myDataSource.getRepository(this._documentEntity)
        const entityDocument = await documentRepository.create(documentData)

        return await documentRepository.save(entityDocument)
    }

    public async update(documentData: any) {
        const documentRepository = await this._myDataSource.getRepository(this._documentEntity)
        const entityDocument = await documentRepository.create(documentData)

        return await documentRepository.save(entityDocument)
    }

    public async delete(id: string) {
        let documentAux: any
        let repositoryAux: any
        const documentRepository = await this._myDataSource.getRepository(this._documentEntity);
        const document = await documentRepository.findOne({ where: { id } });
        if (document.document_type === documentTypes.INBOUND_ORDER) {
            repositoryAux = await this._myDataSource.getRepository(this._inboundOrderEntity);
            documentAux = await repositoryAux.findOne({ where: { id: document.inbound_order.id } });
        } else if (document.document_type  === documentTypes.OUTBOUND_ORDER) {
            repositoryAux = await this._myDataSource.getRepository(this._outboundOrderEntity);
            documentAux = await repositoryAux.findOne({ where: { id: document.outbound_order.id } });
        }

        return await repositoryAux.remove(documentAux)
    }
}