import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { StudentDashboard } from "./StudentDashboard"



describe("<StudentDashboard />", () => {
  let login = true
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <StudentDashboard login={login}/>
      </BrowserRouter>
    )
  })
  it("render's a login page for a logged in user", () => {
    const login = true
    render(
      <MemoryRouter initialEntries={["/"]}>
        <StudentDashboard login={login}/>
      </MemoryRouter>
    )
    const heading = screen.getByRole('heading', {
      name: /weekly assessments/i
    })
    const logo = screen.getByRole('img', {
      name: /learn logo/i
    })
    const policy = screen.getByText(/attendance policy/i)
    const cell = screen.getByRole('cell', {
      name: /5/i
    })
    expect(heading).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(policy).toBeInTheDocument()
    expect(cell).toBeInTheDocument()
    })
})