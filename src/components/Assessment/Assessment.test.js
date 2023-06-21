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
  it("renders the status of the weekly assessments", () => {
    render(<Assessment currentUser={currentUser}/>)
    const status = screen.getByText(/status/i)
    expect(status).toBeInTheDocument()
  })
  it("renders the comprehension of the weekly assessments", () => {
    render(<Assessment currentUser={currentUser}/>)
    const comprehension = screen.getByText(/comprehension/i)
    expect(comprehension).toBeInTheDocument()
  })
  it("renders the reviewer of the weekly assessments", () => {
    render(<Assessment currentUser={currentUser}/>)
    const reviewer = screen.getByText(/reviewer/i)
    expect(reviewer).toBeInTheDocument()
  })
  it("renders the notes of the weekly assessments", () => {
    render(<Assessment currentUser={currentUser}/>)
    const notes = screen.getByText(/notes/i)
    expect(notes).toBeInTheDocument()
  })
})