import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Absences} from "./Absences"

Enzyme.configure({ adapter: new Adapter() })

describe("<Absences />", () => {
  it("displays the number of absences", () => {
    const absencesProps = {absences: 3}
    const absence = shallow(<Absences student={absencesProps}/>)
    const absenceDiv = absence.find("[id=\"absence\"]")
    expect(absenceDiv.length).toEqual(1)
  })
})
