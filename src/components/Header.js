import React from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from  "./Navigation"
import { Greeter } from "../components/Greeter"

const Header = (props) => {
  const { user, login, setLogin } = props
  
  return (
    <div className="flex items-center justify-between bg-[#313133]">
      <div className="flex flex-row">
        <img
          src={ learnLogo }
          className="ml-2 h-auto w-72"
          alt="Learn Academy Logo"
        />
      </div>
      <div className="flex flex-row items-center">
        {user && <div className="mx-10">
          <Greeter user={user} />
        </div>}
        <Navigation user={user} login={login} setLogin={setLogin}/>
      </div>
    </div>
  )
}

export { Header }