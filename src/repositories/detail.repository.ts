import { DetailEntity } from "../entities"

export class DetailRepository {
    private _detailEntity: DetailEntity
    private _myDataSource: any

    constructor({ DetailEntity: DetailEntity, postgresql }) {
        this._detailEntity = DetailEntity
        this._myDataSource = postgresql
    }

    public async create({ inventory_id, unit_price, total_price, quantity, pending_quantity, good_id, document_id }: any) {
        const detailData = { inventory_id, unit_price, total_price, quantity, pending_quantity, good_id, document_id }
        const detail = await this._myDataSource.getRepository(this._detailEntity).create(detailData)
        const result = await this._myDataSource.getRepository(this._detailEntity).save(detail)

        return result
    }

    public async update({ inventory_id, unit_price, total_price, quantity, pending_quantity, order_id }: any) {
        const detailData = { inventory_id, unit_price, total_price, quantity, pending_quantity }
        const detail = await this._myDataSource.getRepository(this._detailEntity).findOneBy({ document_id: order_id })
        await this._myDataSource.getRepository(this._detailEntity).merge(detail, detailData)
        const results = await this._myDataSource.getRepository(this._detailEntity).save(detail)
        return results
    }
}
