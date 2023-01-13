import { DocumentMethods } from "../utils";

export default class AmqpRouter {
  private _method: any;
  private _methods: any;
  private _content: any;

  constructor() {
    this._methods = {...DocumentMethods};
  }

  public redirectRequest(content: any) {
    this._content = content;
    this._method = this._methods[content.method];
    this._method
      ? this._method(this._content)
      : console.log('invalid request in method');
  }
}
