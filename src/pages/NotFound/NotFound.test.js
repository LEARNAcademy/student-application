import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { NotFound } from "./NotFound"
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
  it("renders the Not Found page for the user", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const element = screen.getByText("NotFound")
    expect(element).toBeInTheDocument()
  })
})

  
    
   
    
  

  