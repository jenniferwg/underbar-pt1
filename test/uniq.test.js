const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of strings', () => {
  	const words = ['foo', 'bar', 'bar', 'baz'];
  	expect(_.uniq(words)).toEqual(['foo', 'bar', 'baz']);
  });

  it('returns the original list if there are no duplicates', () => {
  	const words = ['foo', 'bar', 'baz'];
  	expect(_.uniq(words)).toEqual(['foo', 'bar', 'baz']);
  })
});