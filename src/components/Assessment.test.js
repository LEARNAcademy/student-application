import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Assessment } from "./Assessment"
import { user } from "../userMock.js"

Enzyme.configure({ adapter: new Adapter() })

describe("<Assessment />", () => {
  it("displays 6 divs with id of week", () => {
    const assessmentsProps = user.student.assessments
    console.log(assessmentsProps)
    const assessment = shallow(<Assessment assessments={assessmentsProps}/>)
    const assessmentDiv = assessment.find("[id=\"week\"]")
    expect(assessmentDiv.length).toEqual(6)
  })
})
