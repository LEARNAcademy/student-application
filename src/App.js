import React, { useState } from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  const [login, setLogin] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard login={login} setLogin={setLogin}/>} />
        <Route path="/login" element={<StudentLogin login={login} setLogin={setLogin}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
