import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {

  it("displays the StudentDashboard", () => {
    const app = shallow(<App/>)
    const renderedComponent = app.find("StudentDashboard")
    expect(renderedComponent.length).toEqual(1)
  })

})