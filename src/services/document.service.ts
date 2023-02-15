

export class DocumentService {
    private _documentRepository: any

    constructor({ DocumentRepository }: any) {
        this._documentRepository = DocumentRepository
    }

    public async create(body: any, orderType: any) {
        if (!body) {
            const error = new Error();
            error.message = "There is no content in the request.";
            throw error;
        }

    }



}