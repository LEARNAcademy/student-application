import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Footer } from "./Footer"

describe("<Footer />", () => {
  test("renders the logo", () => {
    render(
      <Router>
        <Footer />
      </Router>
    )
    const logo = screen.getByAltText("Learn Logo")
    expect(logo).toBeInTheDocument()
  })

  test("renders the links", () => {
    render(
      <Router>
        <Footer />
      </Router>
    )
    const aboutUsLink = screen.getByText("About Us")
    const privacyPolicyLink = screen.getByText("Privacy Policy")
    const termsOfUseLink = screen.getByText("Terms of Use")
    const codeOfConductLink = screen.getByText("Code of Conduct")
    const contributorsLink = screen.getByText("Contributors")

    expect(aboutUsLink).toBeInTheDocument()
    expect(privacyPolicyLink).toBeInTheDocument()
    expect(termsOfUseLink).toBeInTheDocument()
    expect(codeOfConductLink).toBeInTheDocument()
    expect(contributorsLink).toBeInTheDocument()
  })

  test("renders the copyright notice", () => {
    render(
      <Router>
        <Footer />
      </Router>
    )
    const copyright = screen.getByText("© 2023 LEARN")
    expect(copyright).toBeInTheDocument()
  })
})
