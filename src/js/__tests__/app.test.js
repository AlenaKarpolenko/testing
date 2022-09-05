import demo from '../app';

test('demo', () => {
  const value = '000';

  const received = demo(value);
  const expected = '000';

  expect(received).toBe(expected);
});