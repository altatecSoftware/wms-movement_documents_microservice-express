import { methods } from './methods';

export const redirectRequest = (content: any) => {
  const method = methods[content.method];
  method ? method(content) : console.log('invalid request in method');
};
