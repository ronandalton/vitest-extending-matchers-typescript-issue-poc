import { expect } from 'vitest';

expect.extend({
  //toBeFoo(received: any, expected: string) {
  toBeFoo(received: any) {
    const { isNot } = this;
    return {
      pass: received === 'foo',
      message: () => `${received} is${isNot ? ' not' : ''} foo`
    };
  }
});
