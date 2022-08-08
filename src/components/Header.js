import React from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from  "./Navigation"

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <img
        src={ learnLogo }
        className="h-6 sm:h-20"
        alt="Learn Academy Logo"
      />
      <Navigation />
    </div>
  )
}

export { Header }
