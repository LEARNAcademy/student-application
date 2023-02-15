import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { StudentLogin } from "./StudentLogin"

Enzyme.configure({ adapter: new Adapter() })

describe("<StudentLogin />", () => {
  it("renders a header", () => {
    const contributor = shallow(<StudentLogin />)
    const contributorHeading = contributor.find("Header")
    expect(contributorHeading.length).toEqual(1)
  })
})
