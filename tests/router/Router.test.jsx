import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Router } from "../../src/router";
import { Provider } from "react-redux";
import { store } from "../../src/store";

describe("tests on <Router />", () => {
  test("should show the local clock page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    );
    const { innerHTML } = screen.getByRole("heading");
    expect(innerHTML).toBe("Local Clock");
  });

  test("should show the world clock page", () => {
    render(
      <MemoryRouter initialEntries={["/world-clock"]}>
        <Provider store={store}>
          <Router />
        </Provider>
      </MemoryRouter>
    );
    const { innerHTML } = screen.getByRole("heading");
    expect(innerHTML).toBe("Your Clocks");
  });

  test("should show the timer page", () => {
    render(
      <MemoryRouter initialEntries={["/timer"]}>
        <Provider store={store}>
          <Router />
        </Provider>
      </MemoryRouter>
    );
    const { innerHTML } = screen.getByRole("heading");
    expect(innerHTML).toBe("Timer");
  });

  test("should show the new timer page", () => {
    render(
      <MemoryRouter initialEntries={["/timer/new"]}>
        <Provider store={store}>
          <Router />
        </Provider>
      </MemoryRouter>
    );
    const { innerHTML } = screen.getByRole("heading");
    expect(innerHTML).toBe("New Timer");
  });
});
