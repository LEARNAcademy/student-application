import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { StudentDashboard } from './StudentDashboard'

Enzyme.configure({ adapter: new Adapter() })

describe('<StudentDashboard />', () => {
  it('displays a heading', () => {
    const studentDashboard = shallow(<StudentDashboard />)
    const studentDashboardHeading = studentDashboard.find('h3').text()
    expect(studentDashboardHeading).toEqual('LEARN Student Application')
  })
})
