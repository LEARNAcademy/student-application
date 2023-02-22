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
  const [setToken] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (!login) {
      navigate("/")
    }
  }, [login])
  const verifyLogin = (field) => {
    console.log(field)
    const data = {
      email: field.email,
      password: field.password
    }
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token)
          // Save the token in local storage or a cookie so it can be used on subsequent requests.
          navigate("/")
        } else {
          console.error(data.error)
        }
      })
      .catch((error) => {
        console.error(error)
      })
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