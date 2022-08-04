import React from 'react'
import { AccordionComponent } from '../../components/AccordionComponent'
import { attendancePolicy,assessments } from '../../assets/policy'

const StudentDashboard = () => {
  return (
    <>
      <h3 className="underline">LEARN Student Application</h3>
      <AccordionComponent title={"Attendance Policy"} text={attendancePolicy}/>
    </>
  )
}

export { StudentDashboard }
