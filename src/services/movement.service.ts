import { statusTypes } from "../utils";

export class MovementService {
  private _movementRepository: any

  constructor({ MovementRepository }: any) {
    this._movementRepository = MovementRepository
  }

  public async newStatus(body: any, document_id: string) {
    if (Object.keys(body).length === 0) {
      const error = new Error();
      error.message = "There is not content for the request";
      throw error;
    }
    const document = await this._movementRepository.get(document_id)
    if (!document) {
      const error = new Error();
      error.message = "Document not found";
      throw error;
    }

    const isValid = await this._isDocumentStatusValid(body.status)
    if (!isValid) {
      const error = new Error();
      error.message = "invalid document status";
      throw error;
    }

    return await this._movementRepository.newStatus(body, document_id)
  }

  private _isDocumentStatusValid(documentStatus: string) {
    let isValid: boolean = false
    for (const key in statusTypes) {
      statusTypes[key] === documentStatus ? isValid = true : ''
    }
    return isValid
  }
}