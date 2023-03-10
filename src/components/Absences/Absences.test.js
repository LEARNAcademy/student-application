import React from "react"
import { Absences} from "./Absences"
import { render, screen } from "@testing-library/react"


describe("<Absences />", () => {
  it('displays absences', () => {
    render(
      <Absences student={{ absences: 0 }} />
    )
    expect(screen.getByText(/absences:/i)).toBeInTheDocument()
  })
})
