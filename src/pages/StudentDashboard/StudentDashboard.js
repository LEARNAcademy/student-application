import React, { useEffect } from "react"
import { Absences } from "../../components/Absences/Absences"
import { Assessment } from "../../components/Assessment/Assessment"
import { user } from "../../userMock.js"
import { ComprehensionModal } from "../../components/Modals/ComprehensionModal/ComprehensionModal"
import { Attendance } from "../../components/Attendance/Attendance"
import { AttendancePolicyModal } from "../../components/Modals/PolicyModal/AttendancePolicyModal"
import { AssessmentProcessModal } from "../../components/Modals/AssessmentProcessModal/AssessmentProcessModal"
import { useNavigate } from "react-router-dom"
import { Greeter } from "../../components/Greeter/Greeter"

const StudentDashboard = ({ login, currentUser, setLogin }) => {
  const { assessments } = user.student
  const navigate = useNavigate()

  useEffect(() => {
    if (!login) {
      navigate("/login")
    }
  }, [login])

  return (
    <>
      {login && (
        <main>
          <div className="w-full overflow-x-hidden bg-white font-['gesta']">
            <div className="m-8 mt-10 border-b border-black sm:mx-32 sm:py-10">
              <div className="mb-5">
                <Greeter 
                  user={user}
                  login={login}
                  setLogin={setLogin}
                  currentUser={currentUser}/>
              </div>
              <div className="mb-5">
                <Absences currentUser={currentUser} />
              </div>

              <div className="w-[80vw]">
                <Attendance absences={currentUser.absences}/>
              </div>
              <div className="mt-5 flex w-screen items-center">
                <AttendancePolicyModal />
              </div>
            </div>
            <h1 className="mt-10 ml-10 text-2xl font-medium sm:ml-32">
              Weekly Assessments
            </h1>
            <div className="mt-3 ml-10 flex w-screen items-center sm:mt-5 sm:ml-32">
              <AssessmentProcessModal />
            </div>
            <div className="mt-3 ml-10 mb-10 flex w-screen items-center sm:mt-5 sm:ml-32">
              <ComprehensionModal />
            </div>
            <Assessment assessments={assessments} currentUser={currentUser} />
          </div>
          <div>
          </div>
        </main>
      )}
    </>
  )
}

export { StudentDashboard }
