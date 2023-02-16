import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { AttendancePolicyModal, ComprehensionModal } from "./PolicyModal"

Enzyme.configure({ adapter: new Adapter() })

describe("<AttendancePolicyModal />", () => {
  let modalRender 
  beforeEach(() => {
    modalRender = shallow(<AttendancePolicyModal />)
  })
  it("renders an icon", () => {
    const modalIcon = modalRender.find("img")
    expect(modalIcon.length).toEqual(1)
  } ),
  it("renders a modal", () => {
    const renderModal = modalRender.find("Modal")
    expect(renderModal.length).toEqual(1)
  } ) 
})

describe("<ComprehensionModal />", () => {
  let modalRender 
  beforeEach(() => { 
    modalRender = shallow(<ComprehensionModal />)
  })
  it("renders an icon", () => {
    const modalIcon = modalRender.find("img")
    expect(modalIcon.length).toEqual(1)
  } ),
  it("renders a modal", () => {
    const renderModal = modalRender.find("Modal")
    expect(renderModal.length).toEqual(1)
  } ) 
})