import { DocumentEntity } from "../entities"

export class DocumentRepository {
    private _documentEntity: DocumentEntity
    private _myDataSource: any

    constructor({ DocumentEntity: DocumentEntity, postgresql }) {
        this._documentEntity = DocumentEntity
        this._myDataSource = postgresql
    }

    public async create({ priority, description, delivery_signature, received_signature, observations,
        vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id }: any) {
        const documentData = {
            priority, description, delivery_signature, received_signature, observations,
            vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id
        }
        const document = await this._myDataSource.getRepository(this._documentEntity).create(documentData)
        const { id } = await this._myDataSource.getRepository(this._documentEntity).save(document)
        return { document, document_id: id }
    }

    public async update({ priority, description, delivery_signature, received_signature, observations,
        vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id, order_id }) {

        const documentData = {
            priority, description, delivery_signature, received_signature, observations,
            vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id
        }
        const document = await this._myDataSource.getRepository(this._documentEntity).findOneBy({ id: order_id})
        await this._myDataSource.getRepository(this._documentEntity).merge(document, documentData)
        const results = await this._myDataSource.getRepository(this._documentEntity).save(document)
        return results
    }

}