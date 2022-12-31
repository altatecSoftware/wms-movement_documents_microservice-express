export class documentController {
  private content: any;

  public getAllDocuments() {}
  public getAllDocumentsByType() {}
  public getDocumentById() {}
  public createDocument(content: any) {
    console.log(content);
  }
  public updateDocument() {}
  public deleteDocument() {}

  public getContent(): object {
    return this.content;
  }
}
