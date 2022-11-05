import { secondsToMinutes } from '../../../../src/pages/timer/helpers';

describe('tests on secondsToMinutes.js', () => {
  test('should return minutes and seconds like number', () => {
    const result = secondsToMinutes();
    expect(result).toEqual({
      minutes: expect.any(Number),
      seconds: expect.any(Number),
    });
  });

  test('should return correct values', () => {
    const { minutes, seconds } = secondsToMinutes(75);
    expect(minutes).toBe(1);
    expect(seconds).toBe(15);
  });
});
