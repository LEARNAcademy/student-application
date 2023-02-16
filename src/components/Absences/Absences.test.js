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
  it("displays a default absences of 0", () => {
    const absencesProps = {}
    const absence = shallow(<Absences student={absencesProps}/>)
    const absenceDiv = absence.find("[id=\"absence\"]").text()
    expect(absenceDiv).toEqual("Absences: 0")
  })
})
