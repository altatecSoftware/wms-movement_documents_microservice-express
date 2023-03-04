import { DetailEntity } from "../entities"

export class DetailRepository {
  private _myDataSource: any
  private _detailEntity: DetailEntity

  constructor({ postgresql, DetailEntity }) {
    this._myDataSource = postgresql
    this._detailEntity = DetailEntity
  }

  public async create(data: any, document_id: string) {
    const detailRepository = await this._myDataSource.getRepository(this._detailEntity)

    let detailsArray : string[] = [];
    for (let i = 0; i < data.new_details.length; i++) {
      const newDetail = detailRepository.create({...data.new_details[i], document_id});
      detailsArray.push(newDetail);
    } 
  
    return await detailRepository.save(detailsArray)
  }
}