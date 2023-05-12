import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { PrivacyPolicy } from "./PrivacyPolicy"
import { BrowserRouter } from "react-router-dom"

describe("<PrivacyPolicy />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>
    )
  })

  it("has a heading", () => {
    const header = screen.getByRole("heading", {
      name: /your privacy is critically important to us./i,
    })
    expect(header).toBeInTheDocument()
  })

  it("has a description", () => {
    const description = screen.getByText(/It is LEARN academy's policy to respect your privacy regarding any information we may collect while operating our website./i)
    expect(description).toBeInTheDocument()
  })
})



