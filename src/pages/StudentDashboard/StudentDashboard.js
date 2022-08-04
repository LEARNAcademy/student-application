import React from 'react'
import { Assessment } from '../../components/Assessment'
import { user } from '../../userMock.js'

const StudentDashboard = () => {
  const { assessments } = user.student
  return (
    <>
      <h1 className="underline">LEARN Student Application</h1>
      <h3>Welcome {user.preferred_name}</h3>
      <Assessment assessments={assessments}/>
    </>
  )
}

export { StudentDashboard }
