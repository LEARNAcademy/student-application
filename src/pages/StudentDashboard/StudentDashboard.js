import React from "react"
import { Absences } from "../../components/Absences"
import { Assessment } from "../../components/Assessment"
import { Greeter } from "../../components/Greeter"
import { Header } from "../../components/Header"
import { user } from "../../userMock.js"

const StudentDashboard = () => {
  const { assessments } = user.student
  const { student } = user
  return (
    <>
      <Header/>
      <Greeter user={user} />
      <Absences student={student}/>
      <Assessment assessments={assessments}/>
    </>
  )
}

export { StudentDashboard }
