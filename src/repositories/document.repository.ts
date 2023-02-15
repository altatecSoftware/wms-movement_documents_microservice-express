import { DocumentEntity } from "../entities"

export class DocumentRepository {
    private _documentEntity: DocumentEntity
    private _myDataSource: any

    constructor({ DocumentEntity: DocumentEntity, postgresql }) {
        this._documentEntity = DocumentEntity
        this._myDataSource = postgresql
    }

    public async create(body: any, order_type: any) {

    }



}