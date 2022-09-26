import React from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from  "./Navigation"
import { Greeter } from "../components/Greeter"

const Header = (props) => {
  const { user } = props
  return (
    <div className="flex items-center justify-between bg-[#313133]">
      <div className="xxs:invisible xs:visible sm:flex sm:flex-row">
        <img
          src={ learnLogo }
          className="ml-2 h-10 w-28 sm:h-auto sm:w-72"
          alt="Learn Academy Logo"
        />
      </div>
      <div className="flex flex-row items-start sm:items-center">
        {user && <div className="mx-10">
          <Greeter user={user} />
        </div>}
        <Navigation />
      </div>
    </div>
  )
}

export { Header }