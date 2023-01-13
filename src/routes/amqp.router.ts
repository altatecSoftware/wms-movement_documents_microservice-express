import { Methods } from "../utils";

export default class AmqpRouter {
  private _method: any;
  private _methods: any;
  private _content: any;

  constructor() {
    this._methods = Methods
  }

  public redirectRequest(content: any) {
    if (content.entity === "document") {
      this._content = content;
      this._method = this._methods[content.entity][content.method];
      this._method
        ? this._method(this._content)
        : console.log('invalid request in method');
        return
    }
    console.log('invalid entity')
  }
}
