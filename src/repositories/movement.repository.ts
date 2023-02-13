import { MovementEntity } from "../entities"

export class MovementRepository {
    private _movementEntity: MovementEntity
    private _myDataSource: any

    constructor({ MovementEntity: MovementEntity, postgresql }){
        this._movementEntity = MovementEntity
        this._myDataSource = postgresql
    }

    public async create({ status, area_id, document_id }: any) {
        const movementData = {status, area_id, document_id}
        const movement = await this._myDataSource.getRepository(this._movementEntity).create(movementData)
        const result = await this._myDataSource.getRepository(this._movementEntity).save(movement)
        
        return result
    }
}
