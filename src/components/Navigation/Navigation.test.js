import React from "react"
import { Navigation } from "./Navigation"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

describe("<Navigation />", () => {
  it('displays Navigation', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    expect(screen.getByRole('link', {
      name: /log in/i
    })).toBeInTheDocument()
  })
})