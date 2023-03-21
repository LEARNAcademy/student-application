import React from "react"
import { Greeter } from "./Greeter"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

describe("<Greeter />", () => {
  it("displays Greeter", () => {
    const currentUser = {name:"Maxie"}
    render(
      <BrowserRouter>
        <Greeter currentUser={currentUser}/>
      </BrowserRouter>
    )
    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
  })
})