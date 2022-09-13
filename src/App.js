import React, { useState } from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  const [login, setLogin] = useState(false)

  const theDon = () => {
    setLogin(!login)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard login={login} />} />
        <Route path="/login" element={<StudentLogin login={login} setLogin={theDon}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
