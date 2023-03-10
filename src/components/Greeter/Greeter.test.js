import React from "react"
import { Greeter } from "./Greeter"
import { render, screen } from "@testing-library/react"

describe("<Greeter />", () => {
  it('displays Greeter', () => {
    render(
      <Greeter />
    )
    expect(screen.getByText(/welcome, learn student!/i)).toBeInTheDocument()
  })
})