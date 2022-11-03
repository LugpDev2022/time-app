import { capitalize } from '../../src/helpers';

describe('tests on capitalize.js', () => {
  test('should return a string', () => {
    const word = 'hEllo';
    const capitalizedWord = capitalize(word);

    expect(capitalizedWord).toEqual(expect.any(String));
  });

  test('should capitalize the word', () => {
    const word = 'world';
    const capitalizedWord = capitalize(word);

    expect(capitalizedWord).toBe('World');
  });

  test('should capitalize the sentence', () => {
    const sentence = 'heLlo worLd';
    const capitalizedWord = capitalize(sentence);

    expect(capitalizedWord).toBe('Hello World');
  });
});
