import { methods } from './methods';

export class Route {
  private method: any;
  private content: any;

  constructor() {}

  public redirectRequest(content: any) {
    this.content = content;
    this.method = methods[content.method];
    this.method
      ? this.method(this.content)
      : console.log('invalid request in method');
  }
}
