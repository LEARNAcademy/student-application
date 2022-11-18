import React, { useEffect, useState } from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Contributor } from "./pages/Contributor/Contributor"
import { AboutUs } from "./pages/AboutUs/AboutUs"
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy"
import { TermsOfUse } from "./pages/PrivacyPolicy/TermsOfUse/TermsOfUse"
import { CodeOfConduct } from "./pages/CodeOfConduct/CodeOfConduct"


const App = () => {
  const [login, setLogin] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!login) {
      navigate("/")
    }
  }, [login])

  return (
    <Routes>
      <Route path="/" element={<StudentLogin login={login} setLogin={setLogin} navigate={navigate} />} />
      <Route path="/studentdash" element={<StudentDashboard login={login} setLogin={setLogin} />} />
      <Route path="/contributor" element={<Contributor />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsofuse" element={<TermsOfUse />} />
      <Route path="/codeofconduct" element={<CodeOfConduct />} />
    </Routes>
  )
}

export { App }