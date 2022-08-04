import React from "react"
import { Assessment } from "../../components/Assessment"
import { Greeter } from "../../components/Greeter"
import { Header } from "../../components/Header"
import { user } from "../../userMock.js"

const StudentDashboard = () => {
  const { assessments } = user.student
  return (
    <>
      <Header/>
      <Greeter user={user} />
      <Assessment assessments={assessments}/>
    </>
  )
}

export { StudentDashboard }
