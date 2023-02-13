import { InboundOrderEntity } from "../entities"

export class InboundOrderRepository {
    private _inboundOrderEntity: InboundOrderEntity
    private _myDataSource: any

    constructor({ InboundOrderEntity: InboundOrderEntity, postgresql }) {
        this._inboundOrderEntity = InboundOrderEntity
        this._myDataSource = postgresql
    }

    public async create({ delivered_by, received_by, destination_warehouse_id }: any) {
        const inboundOrderData = { delivered_by, received_by, destination_warehouse_id }
        const inboundOrder = await this._myDataSource.getRepository(this._inboundOrderEntity).create(inboundOrderData)
        const { id } = await this._myDataSource.getRepository(this._inboundOrderEntity).save(inboundOrder)

        return { inboundOrder, inbound_order_id: id, document_type: 'inbound_order' }
    }

    public async update({ delivered_by, received_by, destination_warehouse_id, order_id }: any) {
        const inboundOrderData = { delivered_by, received_by, destination_warehouse_id }
        const inboundOrder = await this._myDataSource.getRepository(this._inboundOrderEntity).findOneBy({ id: order_id })
        await this._myDataSource.getRepository(this._inboundOrderEntity).merge(inboundOrder, inboundOrderData)
        const results = await this._myDataSource.getRepository(this._inboundOrderEntity).save(inboundOrder)
        return results
    }
}
