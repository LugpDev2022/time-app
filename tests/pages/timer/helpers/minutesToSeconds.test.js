import { minutesToSeconds } from "../../../../src/pages/timer/helpers";

describe("tests on minutesToSeconds", () => {
  test("should return a number", () => {
    const seconds = minutesToSeconds(1);
    expect(typeof seconds).toBe("number");
  });

  test("should return te correct seconds", () => {
    const seconds = minutesToSeconds(4);
    expect(seconds).toBe(240);
  });
});
