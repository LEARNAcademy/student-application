import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { PrivacyPolicy } from "./PrivacyPolicy"

Enzyme.configure({ adapter: new Adapter() })

describe("<PrivacyPolicy />", () => {
  it("renders a header", () => {
    const contributor = shallow(<PrivacyPolicy />)
    const contributorHeading = contributor.find("Header")
    expect(contributorHeading.length).toEqual(1)
  })
  it("renders a footer", () => {
    const contributor = shallow(<PrivacyPolicy />)
    const contributorFooter = contributor.find("Footer")
    expect(contributorFooter.length).toEqual(1)
  })
})