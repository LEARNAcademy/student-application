import React from "react"
import { Button } from "../Button/Button"
import { useNavigate } from "react-router-dom"

const Navigation = ({login,setLogin}) => {
  const navigate = useNavigate()

  const navigateLogin = () => {
    setLogin(false)
    navigate("/")
  }

  return (
    <div className="my-2 mr-5 w-20 text-xs xs:w-12 sm:mr-10 sm:w-24">
      {login && 
        <Button text={"LOG OUT"} onClick={navigateLogin} />
      }
      {!login && 
        <Button text={"LOG IN"} path={"/login"} />
      }
    </div>
  )
}

export { Navigation }