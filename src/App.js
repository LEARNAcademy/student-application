import React from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"

const App = () => {
  return (
    <>
      <StudentDashboard />
      <StudentLogin />
    </>
  )
}

export { App }
