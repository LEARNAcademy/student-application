import React from "react";
import { StudentLogin } from "./StudentLogin";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<StudentLogin />", () => {
  it("renders input fields", () => {
    render(
      <BrowserRouter>
        <StudentLogin />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("textbox", {
        name: /email/i,
      })
    ).toBeInTheDocument();
  });
  it("renders submit button", () => {
    render(
      <BrowserRouter>
        <StudentLogin />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("button", {
        name: /submit/i,
      })
    ).toBeInTheDocument();
  });
});
