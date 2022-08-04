import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { StudentDashboard } from "./StudentDashboard"

Enzyme.configure({ adapter: new Adapter() })

describe('<StudentDashboard />', () => {
  it('renders a header', () => {
    const studentDashboard = shallow(<StudentDashboard />)
    const studentDashboardHeading = studentDashboard.find('Header')
    expect(studentDashboardHeading.length).toEqual(1)
  })
})