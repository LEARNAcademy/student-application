import React from "react"
import { TermsOfUse } from "./TermsOfUse"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

describe("<TermsOfUse />", () => {
  it("renders headers", () => {
    render(
      <BrowserRouter>
        <TermsOfUse />
      </BrowserRouter>
    )
    expect(
      screen.getByRole("heading", {
        name: /welcome to learn academy/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /cookies/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /license/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /hyperlinking to our content/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /iframes/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /reservation of rights/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /removal of links from our website/i,
      })
    ).toBeInTheDocument()
  })
  it("renders paragraphs for headers", () => {
    render(
      <BrowserRouter>
        <TermsOfUse />
      </BrowserRouter>
    )
    expect(
      screen.getByText(
        /the following terminology applies to these terms and conditions, privacy statement and disclaimer notice and any or all agreements: 'client', 'you' and 'your' refers to you, the person accessing this website and accepting the company's terms and conditions\. 'the company', 'ourselves', 'we', 'our' and 'us', refers to our company\. 'party', 'parties', or 'us', refers to both the client and ourselves, or either the client or ourselves\. all terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the client's needs in respect of provision of the company's stated services\/products, in accordance with and subject to, prevailing law of united states\. any use of the above terminology or other words in the singular, plural, capitalization and\/or he\/she or they, are taken as interchangeable and therefore as referring to same\./i
      )
    ).toBeInTheDocument()
  })
})
