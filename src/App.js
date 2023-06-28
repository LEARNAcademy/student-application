import React, { useState } from "react"
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard"
import { NotFound } from "./pages/NotFound/NotFound"
import { StudentLogin } from "./pages/StudentLogin/StudentLogin"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Contributor } from "./pages/Contributor/Contributor"
import { AboutUs } from "./pages/AboutUs/AboutUs"
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy"
import { TermsOfUse } from "./pages/TermsOfUse/TermsOfUse"
import { CodeOfConduct } from "./pages/CodeOfConduct/CodeOfConduct"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"



const App = () => {
  const [login, setLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()

  const verifyLogin = (field) => {
    const token = localStorage.getItem("jwt_token")
    fetch("http://localhost:3000/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(field)
    })
      .then((response) => {
        if (response.ok) {
          // Code 200, navigate to home
          setLogin(true)
          navigate("/")
        }
        return response.json()
      })
      .then((data) => setCurrentUser(data))
      .catch((error) => console.error(error))
  }
  
  return (
    <>
      <Header user={currentUser} login={login} setLogin={setLogin} />
      <Routes>
        <Route
          path="/"
          element={
            <StudentDashboard
              currentUser={currentUser}
              login={login}
              setLogin={setLogin}
            />
          }
        />
        <Route
          path="/login"
          element={
            <StudentLogin
              login={login}
              setLogin={setLogin}
              verifyLogin={verifyLogin}
              navigate={navigate}
            />
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy currentUser={currentUser}/>} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/codeofconduct" element={<CodeOfConduct />} />
        <Route path="/contributors" element={<Contributor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export { App }
