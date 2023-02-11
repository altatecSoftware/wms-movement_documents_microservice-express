

export class InboundOrderService {
    private _inboundOrderRepository: any

    constructor({ InboundOrderRepository }: any) {
        this._inboundOrderRepository = InboundOrderRepository
    }

    public create({ delivered_by, received_by, destination_warehouse_id }: any) {
        const inboundOrderData = {delivered_by, received_by, destination_warehouse_id}
        return this._inboundOrderRepository.create(inboundOrderData)
    }

}