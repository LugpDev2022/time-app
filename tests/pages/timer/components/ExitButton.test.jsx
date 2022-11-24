import React from "react";
import { render, screen } from "@testing-library/react";
import { ExitButton } from "../../../../src/pages/timer/components";
import { MemoryRouter } from "react-router-dom";

describe("tests on <ExitButton />", () => {
  test("should match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <ExitButton />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("should redirect to '/timer'", () => {
    render(
      <MemoryRouter>
        <ExitButton />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link.href).toContain("/timer");
  });
});
