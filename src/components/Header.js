import React, { useState } from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from  "./Navigation"
import { Greeter } from "../components/Greeter"

const Header = (props) => {
  const { user } = props
  const [isNavOpen, setIsNavOpen] = useState(false) 
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-400 bg-learngray py-2 sm:hidden">
        <div className="mr-44">
          <img src={learnLogo} alt="logo" className="scale-[75%]"/>
        </div>
        <nav>
          <section className="mr-4 flex">
            <div
              className="space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-learnpurple"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-learnpurple"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-learnpurple"></span>
            </div>
            {
              isNavOpen 
                ? <div className="hidden">
                  : <div className="flex block absolute w-full h-[100vh] top-0 left-0 bg-white z-10 flex-col justify-evenly items-center">
            }
              <div
                className="absolute top-0 right-0 p-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex min-h-[250px] flex-col items-center justify-center">
                <li><Greeter user={user}/></li>
                <li className="my-8 border-b border-gray-400 text-lg uppercase">
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        
      }
    `}</style>
      </div>
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:bg-[#313133]">
        <div className="flex flex-row">
          <img
            src={learnLogo}
            className="ml-2 h-10 w-28 sm:h-auto sm:w-72"
            alt="Learn Academy Logo" />
        </div>
        <div className="flex flex-row items-start sm:items-center">
          {user && <div className="mx-10">
            <Greeter user={user} />
          </div>}
          <Navigation />
        </div>
      </div>
    </>
  )
}

export { Header }