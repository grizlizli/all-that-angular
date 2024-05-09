import { StringIsSubstringPipe } from './string-is-substring.pipe';

describe('StringIsSubstringPipe', () => {
  it('create an instance', () => {
    const pipe = new StringIsSubstringPipe();
    expect(pipe).toBeTruthy();
  });
});
