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
      <div className="m-8 mt-10 border-b border-black p-5 sm:mx-32 sm:py-10 ">
        <Absences student={student}/>
        <Attendance absences={student.absences}/>
        <div className="mt-5 flex w-screen items-center">
          <AttendancePolicyModal/>
        </div>
      </div>
      <h1 className="ml-10 mt-10 text-2xl font-medium sm:ml-32">Weekly Assessments</h1>
      <div className="ml-10 mt-3 flex w-screen items-center sm:mt-5 sm:ml-32">
        <ComprehensionModal/>
      </div>
      <Assessment assessments={assessments}/>
    </div>
  )
}

export { StudentDashboard }