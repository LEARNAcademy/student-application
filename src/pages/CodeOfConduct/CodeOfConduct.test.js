import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { CodeOfConduct } from "./CodeOfConduct"

Enzyme.configure({ adapter: new Adapter() })

describe("<CodeOfConduct />", () => {
  it("renders a header", () => {
    const contributor = shallow(<CodeOfConduct />)
    const contributorHeading = contributor.find("Header")
    expect(contributorHeading.length).toEqual(1)
  })
  it("renders a footer", () => {
    const contributor = shallow(<CodeOfConduct />)
    const contributorFooter = contributor.find("Footer")
    expect(contributorFooter.length).toEqual(1)
  })
})
