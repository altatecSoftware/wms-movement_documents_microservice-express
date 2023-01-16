
export default class BaseRepository {
    private _repository: any

    constructor({model, postgresql}: any){
        this._repository = postgresql.getPostgresDataSource(model)
    }

    public async getAll(){

    }

    public async getAllByType(type: string){

    }

    public async getById(id: string){

    }

    public async create(data: any){
        await this._repository.save(data)
        console.log('Document Saved!!')
    }

    public async update(id: string, data: any){
    
    }

    public async delete(id: string){

    }

}