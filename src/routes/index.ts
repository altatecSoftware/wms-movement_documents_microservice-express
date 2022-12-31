import { methods } from './methods';

export class Route {
  private method: any;
  private methods: any;
  private content: any;

  constructor() {
    this.methods = methods;
  }

  public redirectRequest(content: any) {
    this.content = content;
    this.method = this.methods[content.method];
    this.method
      ? this.method(this.content)
      : console.log('invalid request in method');
  }
}
