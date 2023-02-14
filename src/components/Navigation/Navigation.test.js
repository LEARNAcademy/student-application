import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Navigation } from "./Navigation"
import { BrowserRouter } from "react-router-dom"

Enzyme.configure({ adapter: new Adapter() })

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}))

describe("<Navigation />", () => {
  let navigationRender
  beforeEach(() => {
    navigationRender = shallow(<Navigation />, { wrapper: BrowserRouter })
  })
  it("renders a button", () => {

    const navButton = navigationRender.find("Button")

    expect(navButton.length).toEqual(1)
  })
})