import React from "react"
import { Assessment } from "../../components/Assessment"
import { user } from "../../userMock.js"
import { Greeter } from "../../components/Greeter"
const StudentDashboard = () => {
  const { assessments } = user.student
  return (
    <>
      <h3 className="underline">LEARN Student Application</h3>
      <Greeter user={user} />
      <Assessment assessments={assessments}/>
    </>
  )
}

export { StudentDashboard }
