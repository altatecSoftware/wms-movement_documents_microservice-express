
export class MovementService {
  private _movementRepository: any

  constructor({ MovementRepository }: any) {
    this._movementRepository = MovementRepository
  }

  public async newStatus(body: any, document_id: string) {

    const movement = await this._movementRepository.newStatus(body, document_id)
    return {
      status: "success",
      data: movement
    }
  }

}