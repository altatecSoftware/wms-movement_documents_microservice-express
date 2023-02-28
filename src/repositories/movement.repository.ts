import { MovementEntity } from "../entities"

export class MovementRepository {
  private _myDataSource: any
  private _movementEntity: MovementEntity

  constructor({ postgresql, MovementEntity }) {
    this._myDataSource = postgresql
    this._movementEntity = MovementEntity
  }

  public async newStatus(data: any, document_id: string) {
    const movementRepository = await this._myDataSource.getRepository(this._movementEntity)

    return await movementRepository.save({ ...data, document_id })
  }
}