import React, { useEffect, useState } from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Contributor } from "./pages/Contributor/Contributor"
import { AboutUs } from "./pages/AboutUs/AboutUs"
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy"
import { TermsOfUse } from "./pages/TermsOfUse/TermsOfUse"
import { CodeOfConduct } from "./pages/CodeOfConduct/CodeOfConduct"


const App = () => {
  const [login, setLogin] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!login) {
      navigate("/")
    }
  }, [login])
  const verifyLogin = (field) => {
    console.log(field)
    const token = localStorage.getItem("jwt_token")
    fetch("/api/v1/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }
  
  return (
    <Routes>
      <Route path="/" element={<StudentDashboard login={login} setLogin={setLogin} />} /> 
      <Route path="/login" element={<StudentLogin login={login} setLogin={setLogin} user={verifyLogin} navigate={navigate} />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsofuse" element={<TermsOfUse />} />
      <Route path="/codeofconduct" element={<CodeOfConduct />} />
      <Route path="/contributors" element={<Contributor />} />
    </Routes>
  )
}

export { App }