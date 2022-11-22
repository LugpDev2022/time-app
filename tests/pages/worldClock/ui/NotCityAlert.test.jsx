import { render } from "@testing-library/react";
import { NotCityAlert } from "../../../../src/pages/worldClock/ui";

describe("test on <NotCityAlert />", () => {
  test("should match snapshot", () => {
    const { container } = render(<NotCityAlert />);
    expect(container).toMatchSnapshot();
  });
});
