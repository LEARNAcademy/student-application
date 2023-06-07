import { AttendancePolicyModal } from "../../Modals/PolicyModal/AttendancePolicyModal"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import { render, screen } from "@testing-library/react"


describe("<PolicyModal />", () => {
  it("displays PolicyModal", () => {
    render(
      <BrowserRouter>
        <AttendancePolicyModal />
      </BrowserRouter>
    )
    expect(screen.getByText(/attendance policy/i)).toBeInTheDocument()
  })
})