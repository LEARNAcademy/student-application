import React from "react"
import { Absences } from "../../components/Absences"
import { Assessment } from "../../components/Assessment"
import { Header } from "../../components/Header"
import { user } from "../../userMock.js"
import { AttendancePolicyModal } from "../../components/PolicyModal.js"
import { ComprehensionModal } from "../../components/PolicyModal.js"
import { Attendance } from "../../components/Attendance"
import { Footer } from "../../components/Footer"

const StudentDashboard = (props) => {
  const { login, setLogin } = props
  const { assessments } = user.student
  const { student } = user
  return ( 
    <>
      <div className="w-full overflow-x-hidden bg-white font-['gesta']">
        <Header user={user} login={login} setLogin={setLogin} />
        <div className="m-8 mt-10 border-b border-black sm:mx-32 sm:py-10">
          <div className="mb-5">
            <Absences student={student}/>
          </div>
        
          <div className="w-[80vw]">
            <Attendance absences={student.absences}/>
          </div>
          <div className="mt-5 flex w-screen items-center">
            <AttendancePolicyModal/>
          </div>
        </div>
        <h1 className="mt-10 ml-10 text-2xl font-medium sm:ml-32">Weekly Assessments</h1>
        <div className="mt-3 ml-10 flex w-screen items-center sm:mt-5 sm:ml-32">
          <ComprehensionModal/>
        </div>
        <Assessment assessments={assessments}/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export { StudentDashboard }