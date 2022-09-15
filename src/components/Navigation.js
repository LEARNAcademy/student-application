import React from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

const Navigation = ({login,setLogin}) => {
  const navigate = useNavigate()

  const navigateLogin = () => {
    setLogin(false)
    navigate("/")
  }

  return (
    <div className="mr-10 w-24">
      {login && (
        <Button text={"Log Out"} onClick={navigateLogin} />
      )}
      {!login && (
        <Button text={"Log In"} path={"/"} />
      )}
    </div>
  )
}

export { Navigation }