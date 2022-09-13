import React from "react"
import { Button } from "./Button"
// import { user } from "../userMock"
import { useNavigate } from "react-router-dom"

const Navigation = ({login}) => {
  // const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  const navigateLogin = () => {
    navigate("/login")
  }

  // const navigateHome = () => {
  //   navigate("/")
  // }

  return (
    <div className="mr-10 w-24">
      {login && (
        <Button text={"Log Out"} onClick={navigateLogin} />
      )}
      {!login && (
        <Button text={"Log In"} path={"/login"} />
      )}
    </div>
  )
}

export { Navigation }