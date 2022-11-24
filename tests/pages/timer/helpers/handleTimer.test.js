import { handleTimer } from "../../../../src/pages/timer/helpers";

describe("tests in handleTimer.js", () => {
  test("should return an object", () => {
    const timer = {
      minutes: "0",
      seconds: "00",
    };
    const newTimer = handleTimer({ timer });

    expect(newTimer).toEqual({
      minutes: expect.any(String),
      seconds: expect.any(String),
    });
  });

  //Increment tests

  test("should increment the seconds", () => {
    const timer = {
      minutes: "0",
      seconds: "00",
    };
    const { minutes, seconds } = handleTimer({ timer });

    expect(minutes).toBe("0");
    expect(seconds).toBe("01");
  });

  test("should increment the minutes", () => {
    const timer = {
      minutes: "0",
      seconds: "59",
    };
    const { minutes, seconds } = handleTimer({ timer });

    expect(minutes).toBe("1");
    expect(seconds).toBe("00");
  });

  test("should increment the timer with the given quantity", () => {
    const timer = {
      minutes: "0",
      seconds: "58",
    };
    const { minutes, seconds } = handleTimer({ timer, quantity: 6 });

    expect(minutes).toBe("1");
    expect(seconds).toBe("04");
  });

  //Decrement tests

  test("should decrement the seconds", () => {
    const timer = {
      minutes: "0",
      seconds: "04",
    };
    const { minutes, seconds } = handleTimer({ timer, operation: "decrement" });

    expect(minutes).toBe("0");
    expect(seconds).toBe("03");
  });

  test("should decrement the minutes", () => {
    const timer = {
      minutes: "1",
      seconds: "00",
    };
    const { minutes, seconds } = handleTimer({ timer, operation: "decrement" });

    expect(minutes).toBe("0");
    expect(seconds).toBe("59");
  });

  test("should decrement the timer with the given quantity", () => {
    const timer = {
      minutes: "1",
      seconds: "08",
    };
    const { minutes, seconds } = handleTimer({
      timer,
      operation: "decrement",
      quantity: 9,
    });

    expect(minutes).toBe("0");
    expect(seconds).toBe("59");
  });
});
