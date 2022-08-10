import React from "react"
import { Absences } from "../../components/Absences"
import { Assessment } from "../../components/Assessment"
import { Header } from "../../components/Header"
import { user } from "../../userMock.js"
import { AttendancePolicyModal } from "../../components/PolicyModal.js"
import { ComprehensionModal } from "../../components/PolicyModal.js"
const StudentDashboard = () => {
  const { assessments } = user.student
  const { student } = user
  return (
    <div className="overflow-x-hidden">
      <Header user={user}/>
      <div className="mt-10 mx-32 border-b border-black py-10">
        <Absences student={student}/>
        <div className="flex mt-5 items-center w-screen">
          <AttendancePolicyModal/>
        </div>
      </div>
      <h1 className="font-medium text-5xl mt-10 ml-32">Weekly Assessments</h1>
      <div className="flex mt-5 ml-32 items-center w-screen">
        <ComprehensionModal/>
      </div>
      <Assessment assessments={assessments}/>
    </div>
  )
}

export { StudentDashboard }
