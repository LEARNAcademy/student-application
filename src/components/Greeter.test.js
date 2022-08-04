import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Greeter } from "./Greeter"

Enzyme.configure({ adapter: new Adapter() })

describe("<Greeter />", () => {
  it("displays preferred_name if available", () => {
    const greeterProps = {name: "Bob", preferred_name:"Bobby"}
    const greeterRender = shallow(<Greeter user={greeterProps}/>)
    const greetingDiv = greeterRender.find("[id=\"greeting\"]").text()
    expect(greetingDiv).toEqual("Welcome, Bobby!")
  })
})
