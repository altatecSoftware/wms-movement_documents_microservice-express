export default class DetailController {
    private _content: any;
  
    public getAllDetails() {}
    public getAllDetailsByType() {}
    public getDetailById() {}
    public createDetail(content: any) {
      console.log(content);
    }
    public updateDetail() {}
    public deleteDetail() {}
  
    public getContent(): object {
      return this._content;
    }
  }