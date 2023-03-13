import { render, screen } from "@testing-library/react";
import React from "react";
import { AboutUs } from "./AboutUs";
import { BrowserRouter } from "react-router-dom";

describe("<AboutUs />", () => {
  it("renders the paragraph", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        /with equal access to knowledge and career development, learn academy is teaching a new generation of daring and diverse students to be compassionate, curious and professional web developers\. \(lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\.\)/i
        )
    ).toBeInTheDocument();
  });
});
