import React from "react" 
import learnSymbol from "../assets/learn-symbol.svg"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full px-8 py-4 text-lg lg:px-8">
        <div className="m-8 mx-20 flex flex-wrap space-x-4 justify-self-auto font-['gesta'] ">
          <a href="/"> 
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