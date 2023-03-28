import React from "react"
import { Assessment } from "./Assessment"
import { render, screen } from "@testing-library/react"

describe ("<Assessment />", () => {
  let currentUser = {
    assessment: [
      {
        student_id: 1,
        week: 1,
        status: 1,
        comprehension: 1,
        reviewer: "",
        notes: ""
      }
    ]
  }
  it("renders the weekly assessments", () => {
    render(<Assessment currentUser={currentUser}/>)
    const weeklyAssessment = screen.getByText(/week/i)
    expect(weeklyAssessment).toBeInTheDocument()
  })
})
