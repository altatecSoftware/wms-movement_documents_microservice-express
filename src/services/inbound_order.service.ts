

export class InboundOrderService {
    private _inboundOrderRepository: any

    constructor({ InboundOrderRepository }: any) {
        this._inboundOrderRepository = InboundOrderRepository
    }

    public async create({ delivered_by, received_by, destination_warehouse_id }: any) {
        const inboundOrderData = {delivered_by, received_by, destination_warehouse_id}
        return await this._inboundOrderRepository.create(inboundOrderData)
    }

    public async update({ delivered_by, received_by, destination_warehouse_id, order_id }: any){
        const inboundOrderData = { delivered_by, received_by, destination_warehouse_id, order_id }
        return await this._inboundOrderRepository.update(inboundOrderData) 
    }

}