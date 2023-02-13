

export class DocumentSignatureService {
    private _documentSignatureRepository: any

    constructor({ DocumentSignatureRepository }: any) {
        this._documentSignatureRepository = DocumentSignatureRepository
    }

    public async create({ path, document_id }: any) {
        const documentSignatureData = {path, document_id}
        return await this._documentSignatureRepository.create(documentSignatureData)
    }

    public async update({ path, order_id }: any){
        const documentSignatureData = { path, order_id }
        return await this._documentSignatureRepository.update(documentSignatureData) 
    }

}