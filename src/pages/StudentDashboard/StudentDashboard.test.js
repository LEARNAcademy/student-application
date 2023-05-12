import React from "react"
import { screen, render } from "@testing-library/react"
import {  MemoryRouter } from "react-router-dom"
import { StudentDashboard } from "./StudentDashboard"

describe("<StudentDashboard />", () => {
  it("render's a login page for a logged in user", () => {
    const login = true
    render(
      <MemoryRouter initialEntries={["/"]}>
        <StudentDashboard login={login} currentUser={{ jwt: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2Mn0.egIuK1AD2Pyrbu4vL4F4BHC9V6e3xyZ1SZMnQU2sb0I", name: "Maxie", absences: 0 }}/>
      </MemoryRouter>
    )
    const heading = screen.getByRole("heading", {
      name: /weekly assessments/i
    })

    const policy = screen.getByText(/attendance policy/i)
    const cell = screen.getByRole("cell", {
      name: /5/i
    })
    expect(heading).toBeInTheDocument()
    expect(policy).toBeInTheDocument()
    expect(cell).toBeInTheDocument()
  })
})
