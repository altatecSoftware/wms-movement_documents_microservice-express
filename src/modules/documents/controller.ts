export default class DocumentController {
  private content: any;

  public getAllDocuments(content: any) {
    console.log("GetAll", content);
  }
  public getAllDocumentsByType(content: any) {
    console.log("GetAllByType", content);
  }
  public getDocumentById(content: any) {
    console.log("GetAllById", content);
  }
  public createDocument(content: any) {
    console.log("Create", content);
  }
  public updateDocument(content: any) {
    console.log("Update", content);
  }
  public deleteDocument(content: any) {
    console.log("Delete", content);
  }

  public getContent(): object {
    return this.content;
  }
}
