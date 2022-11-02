import React from "react" 
import LEARNSymbol from "../assets/LEARNSymbol.svg"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full px-8 py-4 text-lg lg:px-8">
        <div className="m-8 mx-20 flex flex-wrap space-x-4 justify-self-auto font-['gesta'] ">
          < img src={LEARNSymbol}/>
          <p className="flex-auto"> © 2022 LEARN</p>
          <NavLink to="/studentdash" className="hover:text-learnpurple">About Us</NavLink>
          <NavLink to="" className="hover:text-learnpurple">Privacy Policy</NavLink>
          <NavLink to="" className="hover:text-learnpurple">Terms of Use</NavLink>
          <NavLink to="" className="hover:text-learnpurple">Code of Conduct</NavLink>
          <NavLink to="" className="hover:text-learnpurple">Contributors</NavLink>
        </div>
      </div>
    </>
  )}

export { Footer }