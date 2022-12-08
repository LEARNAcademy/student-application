import React from "react" 
import learnSymbol from "../assets/learn-symbol.svg"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full px-8 py-4 text-lg lg:px-8">
        <div className="justify-start mx-20 space-y-4  sm:m-8 sm:mx-20  sm:flex sm:flex-wrap  sm:space-x-4 sm:space-y-4 sm:justify-self-auto sm:font-['gesta'] md:mx-16">
          
          <a href="/"  className="ml-4"> 
            < img src={learnSymbol}/>
          </a>
          <p className="flex-auto"> © 2022 LEARN</p>
          <NavLink to="/aboutus" className="hover:text-learnpurple">About Us</NavLink>
          <NavLink to="/privacypolicy" className="hover:text-learnpurple">Privacy Policy</NavLink>
          <NavLink to="/termsofuse" className="hover:text-learnpurple">Terms of Use</NavLink>
          <NavLink to="/codeofconduct" className="hover:text-learnpurple">Code of Conduct</NavLink>
          <NavLink to="/contributor" className="hover:text-learnpurple">Contributors</NavLink>
        </div>
      </div>
    </>
  )}

export { Footer }