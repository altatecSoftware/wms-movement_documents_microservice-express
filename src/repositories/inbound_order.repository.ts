

export class InboundOrderRepository {
    private _inboundOrderEntity: any
    private _myDataSource: any

    constructor({ InboundOrderEntity, postgresql }: any){
        this._inboundOrderEntity = InboundOrderEntity
        this._myDataSource = postgresql
    }

    public async create(inboundOrderData: any) {
        const inboundOrder = await this._myDataSource.getRepository(this._inboundOrderEntity).create(inboundOrderData)
        const results = await this._myDataSource.getRepository(this._inboundOrderEntity).save(inboundOrder)
    }
}
