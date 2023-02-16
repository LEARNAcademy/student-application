import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { AboutUs } from "./AboutUs"

Enzyme.configure({ adapter: new Adapter() })

describe("<AboutUs />", () => {
  it("renders a header", () => {
    const contributor = shallow(<AboutUs />)
    const contributorHeading = contributor.find("Header")
    expect(contributorHeading.length).toEqual(1)
  })
  it("renders a footer", () => {
    const contributor = shallow(<AboutUs />)
    const contributorFooter = contributor.find("Footer")
    expect(contributorFooter.length).toEqual(1)
  })
})
