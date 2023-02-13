

export class MovementService {
    private _movementRepository: any

    constructor({ MovementRepository }: any) {
        this._movementRepository = MovementRepository
    }

    public async create({ status, area_id, document_id }: any) {
        const movementData = {status, area_id, document_id}
        return await this._movementRepository.create(movementData)
    }

}