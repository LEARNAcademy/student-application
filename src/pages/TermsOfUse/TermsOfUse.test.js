import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { TermsOfUse } from "./TermsOfUse"

Enzyme.configure({ adapter: new Adapter() })

describe("<TermsOfUse />", () => {
  it("renders a header", () => {
    const contributor = shallow(<TermsOfUse />)
    const contributorHeading = contributor.find("Header")
    expect(contributorHeading.length).toEqual(1)
  })
  it("renders a footer", () => {
    const contributor = shallow(<TermsOfUse />)
    const contributorFooter = contributor.find("Footer")
    expect(contributorFooter.length).toEqual(1)
  })
})