export default class AmqpRouter {
  private _method: any;
  private _methods: any;
  private _entity_exist: boolean = false;

  constructor({ response_methods }: any) {
    this._methods = response_methods
  }

  public redirectRequest(content: any) {
    Object.entries(this._methods).forEach(([entity, value]) => {
      if (entity === content.entity) {
        this._method = this._methods[content.entity][content.method];
        this._method
          ? this._method(content)
          : console.log('Error message with RabbitMQ - Method not found');
        this._entity_exist = true
        return
      }
    });
    !this._entity_exist ? console.log('Error message with RabbitMQ - Entity not found') : ''
    this._entity_exist = false
  }
}