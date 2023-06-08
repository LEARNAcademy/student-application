import { AssessmentProcessModal } from "../../Modals/AssessmentProcessModal/AssessmentProcessModal"
import React from "react"
import { render } from "@testing-library/react"


describe("<AssessmentProcessModal />", () => {
  it("renders an icon", () => {
    const { getByAltText } = render(<AssessmentProcessModal />)
    const modalIcon = getByAltText("Assessment Policy Icon")
    expect(modalIcon).toBeInTheDocument()
  })
  it("renders a modal", () => {
    const { getByText } = render(<AssessmentProcessModal />)
    const renderModal = getByText("Assessment Policy")
    expect(renderModal).toBeInTheDocument()
  })
})