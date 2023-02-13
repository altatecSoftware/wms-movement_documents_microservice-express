

export class DocumentService {
    private _documentRepository: any

    constructor({ DocumentRepository }: any) {
        this._documentRepository = DocumentRepository
    }

    public async create({ priority, description, delivery_signature, received_signature, observations,
        vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id }: any,) {
        const documentData = {
            priority, description, delivery_signature, received_signature, observations,
            vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id
        }
        return await this._documentRepository.create(documentData)
    }

    public async update({ priority, description, delivery_signature, received_signature, observations,
        vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id, order_id }: any) {
            const documentData = {
                priority, description, delivery_signature, received_signature, observations,
                vehicle, license_plate, document_type, contact_id, inbound_order_id, outbound_order_id, order_id
            }   
            return await this._documentRepository.update(documentData)
    }

}