import { Methods, Entities } from "../utils";

export default class AmqpRouter {
  private _method: any;
  private _methods: any;
  private _entities: any;
  private _content: any;
  private _BAND: boolean = false;

  constructor() {
    this._methods = Methods
    this._entities = Entities
  }

  public redirectRequest(content: any) {
    Object.entries(Methods).forEach(([entity, value]) => {
      if (entity === content.entity) {
        this._content = content;
        this._method = this._methods[content.entity][content.method];
        this._method
          ? this._BAND = true
          : console.log('invalid request in method');
        return
      } 
    });

    this._BAND ? this._method(this._content) : ''
  }
}