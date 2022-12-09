import React from "react" 
import learnSymbol from "../assets/learn-symbol.svg"
// import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <center className="h-auto w-full px-8 py-4 text-lg lg:px-8">
        <center className="sm:flex sm:justify-evenly font-['gesta']">
          <a href="/" className="mb-4 sm:mb-0">
            <img src={learnSymbol} className="mb-3 mr-3 h-8 justify-center" alt="Learn Logo" />
          </a>
          <ul className="mb-6 flex flex-wrap items-center sm:mb-0 justify-center">
            <li>
              <a href="/aboutus" className="mr-4 hover:text-learnpurple md:mr-6 ">About Us</a>
            </li>
            <li>
              <a href="/privacypolicy" className="mr-4 hover:text-learnpurple md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="/termsofuse" className="mr-4 hover:text-learnpurple md:mr-6 ">Terms of Use</a>
            </li>
            <li>
              <a href="/codeofconduct" className="mr-4 hover:text-learnpurple">Code of Conduct</a>
            </li>
            <li>
              <a href="/contributors" className="mr-4 hover:text-learnpurple">Contributors</a>
            </li>
          </ul>
        </center>
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <span className="block text-center "> <a href="/" className="hover:text-learnpurple">© 2022 LEARN</a>
        </span>
        {/* <div className="justify-start ml-2 space-y-4 space-x-2  sm:mx-20 sm:flex sm:flex-wrap  sm:space-x-[96px] sm:space-y-20 sm:justify-self-auto sm:font-['gesta'] md:ml-4 md:mx-12 md:text-sm ">
          
          < img src={learnSymbol}/>
          <a href="/"  className="ml-[33px]sm:ml-4"> 
          </a>
          <p className="flex mt-[-55px] ml-[50px] mb-[25px] sm:flex-auto"> © 2022 LEARN</p>
          <NavLink to="/aboutus" className="hover:text-learnpurple">About Us</NavLink>
          <NavLink to="/privacypolicy" className="hover:text-learnpurple">Privacy Policy</NavLink>
          <NavLink to="/termsofuse" className="hover:text-learnpurple">Terms of Use</NavLink>
          <NavLink to="/codeofconduct" className="hover:text-learnpurple">Code of Conduct</NavLink>
          <NavLink to="/contributor" className="hover:text-learnpurple">Contributors</NavLink>
        </div> */}
      </center>
    </>
  )}

export { Footer }