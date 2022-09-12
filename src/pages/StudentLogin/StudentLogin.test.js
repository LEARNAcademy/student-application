import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { StudentLogin } from "./StudentLogin"

Enzyme.configure({ adapter: new Adapter() })

describe("<StudentLogin />", () => {
  let studentLoginRender
  beforeEach (() => {
    studentLoginRender = shallow(<StudentLogin />)
  })
  it("renders a header", () => {
    const studentLoginHeading = studentLoginRender.find("Header")
    expect(studentLoginHeading.length).toEqual(1)
  })
  it("displays a form", () => {
    const studentLoginForm = studentLoginRender.find("form")
    expect(studentLoginForm.length).toEqual(1)
  })
})