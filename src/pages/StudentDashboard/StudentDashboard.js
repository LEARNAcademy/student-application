import React from "react"
import { Absences } from "../../components/Absences"
import { Assessment } from "../../components/Assessment"
import { Header } from "../../components/Header"
import { user } from "../../userMock.js"
import { AttendancePolicyModal } from "../../components/PolicyModal.js"
import { ComprehensionModal } from "../../components/PolicyModal.js"
import { Attendance } from "../../components/Attendance"

const StudentDashboard = (props) => {
  const { login, setLogin } = props
  const { assessments } = user.student
  const { student } = user
  return (
    <div className="overflow-x-hidden w-full font-['gesta'] bg-neutral-200">
      <Header user={user} login={login} setLogin={setLogin} />
      <div className="p-5 m-8 mt-10 border-b border-black sm:py-10 sm:mx-32">
        <div className="mb-5">
          <Absences student={student}/>
        </div>
        
        <div className="w-[80vw]">
          <Attendance absences={student.absences}/>
        </div>
        <div className="flex items-center mt-5 w-screen">
          <AttendancePolicyModal/>
        </div>
      </div>
      <h1 className="mt-10 ml-10 text-2xl font-medium sm:ml-32">Weekly Assessments</h1>
      <div className="flex items-center mt-3 ml-10 w-screen sm:mt-5 sm:ml-32">
        <ComprehensionModal/>
      </div>
      <Assessment assessments={assessments}/>
    </div>
  )
}

export { StudentDashboard }