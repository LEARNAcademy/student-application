import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, BrowserRouter } from "react-router-dom"
import { App } from "./App"

describe("<App />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const element = screen.getByText("Email")
    expect(element).toBeInTheDocument()
  })
  it("render's a login page for a logged out user", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    )
    const element = screen.getByText("Password")
    expect(element).toBeInTheDocument()
  })
})