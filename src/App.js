import React from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/login" element={<StudentLogin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
