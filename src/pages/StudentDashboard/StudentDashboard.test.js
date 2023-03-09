import { render } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { StudentDashboard } from "./StudentDashboard"



describe("<StudentDashboard />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <StudentDashboard />
      </BrowserRouter>
    )
  })
})
