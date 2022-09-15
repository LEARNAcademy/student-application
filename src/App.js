import React, { useEffect, useState } from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"
import { Routes, Route, useNavigate } from "react-router-dom"

const App = () => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!login) {
      navigate("/")
    }
  }, [login])

  return (
    <Routes>
      <Route path="/" element={<StudentLogin login={login} setLogin={setLogin} navigate={navigate}/>} />
      <Route path="/studentdash" element={<StudentDashboard login={login} setLogin={setLogin}/>} />
    </Routes>   
  )
}     

export { App }