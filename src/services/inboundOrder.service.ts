

export class DocumentService {
    private _documentRepository: any

    constructor({ DocumentRepository }: any) {
        this._documentRepository = DocumentRepository
    }

    public getAll() {
        console.log('Service')
        this._documentRepository.getAll()
    }

    public get() {
        console.log('Service')
        this._documentRepository.get()
    }

    public create(inbound_order_info: any) {
        console.log('Service')
        this._documentRepository.create()
        // const { delivered_by, received_by, destination_warehouse_id, ...document_info } = inbound_order_info
        // const { priority, description, delivery_signature, received_signature, 
        //         observations, vehicle, license_plate, document_type, contact_id, ...detail_info } = document_info
        // const { inventory_id, unit_price, total_price, quantity, pending_quantity, ...movement_info} = detail_info
        // const { status, area_id,  ...document_signature_info} = movement_info
        // const { path } = document_signature_info
    }

    public update() {
        console.log('Service')
        this._documentRepository.update()
    }

    public delete() {
        console.log('Service')
        this._documentRepository.delete()
    }
}