import React from "react"
import { AttendancePolicyModal } from "./AttendancePolicyModal"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

describe("<PolicyModal />", () => {
  it('displays PolicyModal', () => {
    render(
      <BrowserRouter>
        <AttendancePolicyModal />
      </BrowserRouter>
    )
    expect(screen.getByText(/attendance policy/i)).toBeInTheDocument()
  })
})