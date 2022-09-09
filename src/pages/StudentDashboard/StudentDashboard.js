import React from "react"
import { Absences } from "../../components/Absences"
import { Assessment } from "../../components/Assessment"
import { Header } from "../../components/Header"
import { user } from "../../userMock.js"
import { AttendancePolicyModal } from "../../components/PolicyModal.js"
import { ComprehensionModal } from "../../components/PolicyModal.js"
import { Attendance } from "../../components/Attendance"

const StudentDashboard = () => {
  const { assessments } = user.student
  const { student } = user
  return (
    <div className="overflow-x-hidden bg-neutral-200 font-['gesta']">
      <Header user={user}/>
      <div className="mx-32 mt-10 border-b border-black py-10">
        <Absences student={student}/>
        <Attendance absences={student.absences}/>
        <div className="mt-5 flex w-screen items-center">
          <AttendancePolicyModal/>
        </div>
      </div>
      <h1 className="mt-10 ml-32 text-2xl font-medium">Weekly Assessments</h1>
      <div className="mt-5 ml-32 flex w-screen items-center">
        <ComprehensionModal/>
      </div>
      <Assessment assessments={assessments}/>
    </div>
  )
}

export { StudentDashboard }
