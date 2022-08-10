import React from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from  "./Navigation"

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#313133]">
      <img
        src={ learnLogo }
        className="ml-2 h-auto w-72"
        alt="Learn Academy Logo"
      />
      <Navigation />
    </div>
  )
}

export { Header }
