import { render, screen } from "@testing-library/react"
import { Attendance } from "./Attendance"

describe("<Attendance component />", () => {
  it("renders without errors", () => {
    render(<Attendance absences={0} />)
    const tableElement = screen.getByRole("table")
    expect(tableElement).toBeInTheDocument()
  })
})