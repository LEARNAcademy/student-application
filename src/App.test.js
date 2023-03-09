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
  })
  it("render's a login page for a logged out user", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    )
    const button = screen.getByRole('button', {
      name: /submit/i
    })
    const textbox = screen.getByRole('textbox', {
      name: /email/i
    })
    expect(button).toBeInTheDocument()
    expect(textbox).toBeInTheDocument()
  })
})