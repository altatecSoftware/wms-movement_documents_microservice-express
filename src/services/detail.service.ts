
export class DetailService {
    private _detailRepository: any
    private _documentRepository: any
  
    constructor({ DetailRepository, DocumentRepository }: any) {
      this._detailRepository = DetailRepository
      this._documentRepository = DocumentRepository
    }
  
    public async create(body: any, document_id: string) {
      
      const document = await this._documentRepository.get(document_id)
      if (!document) {
        return { status: "success", message: "There is no document with the id: " + document_id }
      }

      const details = await this._detailRepository.create(body, document_id)
      return {
        status: "success",
        data: details
      }
    }
  
  }