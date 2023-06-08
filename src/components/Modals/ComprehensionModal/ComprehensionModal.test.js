import { BrowserRouter } from "react-router-dom"
import { ComprehensionModal } from "../../Modals/ComprehensionModal/ComprehensionModal"
import React from "react"
import { render, screen } from "@testing-library/react"


describe("<ComprehensionModal/>", () => {
  it("displays ComprehensionModal", () => {
    render(
      <BrowserRouter>
        <ComprehensionModal />
      </BrowserRouter>
    )
    expect(screen.getByText(/comprehension levels/i)).toBeInTheDocument()
  })
})