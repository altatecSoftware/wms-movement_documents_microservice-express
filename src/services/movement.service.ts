
export class MovementService {
  private _movementRepository: any
  private _documentRepository: any

  constructor({ MovementRepository, DocumentRepository }: any) {
    this._movementRepository = MovementRepository
    this._documentRepository = DocumentRepository
  }

  public async create(body: any, document_id: string) {
    
    const document = await this._documentRepository.get(document_id)
    if (!document) {
      return { status: "success", message: "There is no document with the id: " + document_id }
    }
    const movement = await this._movementRepository.create(body, document_id)
    return {
      status: "success",
      data: movement
    }
  }

}