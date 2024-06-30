import { IsSubstringPipe } from './string-is-substring.pipe';

describe('IsSubstringPipe', () => {
  it('create an instance', () => {
    const pipe = new IsSubstringPipe();
    expect(pipe).toBeTruthy();
  });
});
