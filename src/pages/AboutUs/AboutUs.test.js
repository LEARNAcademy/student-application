import React from "react"
// import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
// import { AboutUs } from "./AboutUs"

Enzyme.configure({ adapter: new Adapter() })

describe("<AboutUs />", () => {
  it("renders a header", () => {
    // const aboutUs = shallow(<AboutUs />)
    // const aboutUsHeading = studentDashboard.find("Header")
    // expect(aboutUsHeading.length).toEqual(1)
  })
})
