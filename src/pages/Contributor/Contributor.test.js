import React from "react"
import { Contributor } from "./Contributor"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"

describe("<Contributor />", () => {
  it("renders contributor names", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    )
    expect(screen.getByRole("heading", {
      name: /sarah proctor/i
    })).toBeInTheDocument()
    expect(screen.getByRole("heading", {
      name: /nicole mares rivera/i
    })).toBeInTheDocument()
    expect(screen.getByRole("heading", {
      name: /gene martinez/i
    })).toBeInTheDocument()
    expect(screen.getByRole("heading", {
      name: /charlie sihaphong/i
    })).toBeInTheDocument()
  })
  it("renders cohorts", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    )
    expect(screen.getByRole("heading", {
      name: /2018 delta/i
    })).toBeInTheDocument()
  })

  it("renders a card", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    )
    const contributorCard = screen.queryAllByTestId("contributor-card")
    contributorCard.forEach((card) => {
      expect(card).toBeInTheDocument()
    })
  })

  it("renders an image", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    )
    const contributorImage = screen.getAllByRole("img", {name: "contributor-image"})
    contributorImage.forEach((image) => {
      expect(image).toBeInTheDocument()
    })
  })

  it("renders a github link", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    )
    const contributorGithub = screen.queryAllByTestId("github-link")
    contributorGithub.forEach((github) => {
      expect(github).toBeInTheDocument()
    })
  })

  it("renders a linkedin link", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    )
    const contributorLinkedIn = screen.queryAllByTestId("linkedin-link")
    contributorLinkedIn.forEach((linkedin) => {
      expect(linkedin).toBeInTheDocument()
    })
  })
  
  it("renders a contributor bio", () => {
    render(
      <BrowserRouter>
        <Contributor />
      </BrowserRouter>
    )
    const contributorBio = screen.getAllByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    contributorBio.forEach((bio) => {
      expect(bio).toBeInTheDocument()
    })
  })
})
