import React from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from  "./Navigation"

const Header = () => {
  return (
    <>
      <img
        src={ learnLogo }
        className="mr-3 h-6 sm:h-20"
        alt="Learn Academy Logo"
      />
      <Navigation />
    </>
  )
}

export { Header }
