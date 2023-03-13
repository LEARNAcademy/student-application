import React from "react";
import { Contributor } from "./Contributor";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("<Contributor />", () => {
  it("renders contributor names", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', {
      name: /sarah proctor/i
    })).toBeInTheDocument()
    expect(screen.getByRole('heading', {
      name: /nicole mares rivera/i
    })).toBeInTheDocument()
    expect(screen.getByRole('heading', {
      name: /gene martinez/i
    })).toBeInTheDocument()
    expect(screen.getByRole('heading', {
      name: /charlie sihaphong/i
    })).toBeInTheDocument()
  });
  it("renders cohorts", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', {
      name: /2018 delta/i
    })).toBeInTheDocument()
  });
});
