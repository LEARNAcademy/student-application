import React, { useEffect } from "react"
import { Absences } from "../../components/Absences/Absences"
import { Assessment } from "../../components/Assessment/Assessment"
import { Header } from "../../components/Header/Header"
import { user } from "../../userMock.js"
import { AttendancePolicyModal, ComprehensionModal } from "../../components/PolicyModal/PolicyModal"
import { Attendance } from "../../components/Attendance/Attendance"
import { Footer } from "../../components/Footer/Footer"
import { AssessmentProcessModal } from "../../components/AssessmentProcessModal/AssessmentProcessModal"
import { useNavigate } from "react-router-dom"

const StudentDashboard = ({ login, setLogin }) => {
  const { assessments } = user.student
  const { student } = user
  const navigate = useNavigate()


  useEffect(() => {
    if(!login) {
      navigate("/login")
    }
  }, [login])

  return ( 
    <>
      {login && (
        <main>
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
              <AssessmentProcessModal/>
            </div>
            <div className="mt-3 ml-10 flex w-screen items-center sm:mt-5 sm:ml-32">
              <ComprehensionModal/>
            </div>
            <Assessment assessments={assessments}/>
          </div>
          <div>
            <Footer/>
          </div>
        </main>
      )}
    </>
  )
}

export { StudentDashboard }