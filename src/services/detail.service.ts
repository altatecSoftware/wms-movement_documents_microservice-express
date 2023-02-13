

export class DetailService {
    private _detailRepository: any

    constructor({ DetailRepository }: any) {
        this._detailRepository = DetailRepository
    }

    public async create({ inventory_id, unit_price, total_price, quantity, pending_quantity, document_id }: any) {
        const detailData = {inventory_id, unit_price, total_price, quantity, pending_quantity, document_id}
        return await this._detailRepository.create(detailData)
    }

    public async update({ inventory_id, unit_price, total_price, quantity, pending_quantity, order_id }: any){
        const detailData = { inventory_id, unit_price, total_price, quantity, pending_quantity, order_id }
        return await this._detailRepository.update(detailData)
    }

}