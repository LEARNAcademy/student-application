import React from 'react'
import { Header } from '../../components/Header'
import { Assessment } from '../../components/Assessment'
import { user } from '../../userMock.js'

const StudentDashboard = () => {
  const { assessments } = user.student
  return (
    <>
      <Header/>
      <Assessment assessments={assessments}/>
    </>
  )
}

export { StudentDashboard }
