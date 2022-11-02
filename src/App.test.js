import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { App } from "./App"

Enzyme.configure({ adapter: new Adapter() })

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}))

describe("<App />", () => {
  it("contains the two Routes", () => {
    const app = shallow(<App/>)
    const renderedComponent = app.find("Route")
    expect(renderedComponent.length).toEqual(3)
  })
})
