import { DocumentSignatureEntity } from "../entities"

export class DocumentSignatureRepository {
    private _documentSignatureEntity: DocumentSignatureEntity
    private _myDataSource: any

    constructor({ DocumentSignatureEntity: DocumentSignatureEntity, postgresql }){
        this._documentSignatureEntity = DocumentSignatureEntity
        this._myDataSource = postgresql
    }

    public async create({ path, document_id }: any) {
        const documentSignatureData = {path, document_id}
        const documentSignature = await this._myDataSource.getRepository(this._documentSignatureEntity).create(documentSignatureData)
        const result = await this._myDataSource.getRepository(this._documentSignatureEntity).save(documentSignature)
        
        return result
    }

    public async update({ path, order_id }: any){
        const documentSignatureData = { path, order_id }
        const documentSignature = await this._myDataSource.getRepository(this._documentSignatureEntity).findOneBy({ document_id: order_id})
        await this._myDataSource.getRepository(this._documentSignatureEntity).merge(documentSignature, documentSignatureData)
        const results = await this._myDataSource.getRepository(this._documentSignatureEntity).save(documentSignature)
        return results
    }
}
