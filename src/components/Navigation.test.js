import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Navigation } from "./Navigation"

Enzyme.configure({ adapter: new Adapter() })

describe("<Navigation />", () => {
   let navigationRender 
    beforeEach(() => {
        navigationRender = shallow(<Navigation />)
    })
    it("renders a button", () => {
        const navButton = navigationRender.find("Button")
        expect(navButton.length).toEqual(1)
    } )
})