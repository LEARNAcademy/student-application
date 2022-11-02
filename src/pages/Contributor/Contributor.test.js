import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Contributor } from "./Contributor"

Enzyme.configure({ adapter: new Adapter() })

describe("<Contributor />", () => {
  it("renders a header", () => {
    const contributor = shallow(<Contributor />)
    const contributorHeading = contributor.find("Header")
    expect(contributorHeading.length).toEqual(1)
  })
  it("renders a footer", () => {
    const contributor = shallow(<Contributor />)
    const contributorFooter = contributor.find("Footer")
    expect(contributorFooter.length).toEqual(1)
  })
})




