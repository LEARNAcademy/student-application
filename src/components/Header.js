import React, { useState } from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from  "./Navigation"
import { Greeter } from "../components/Greeter"

const Header = (props) => {
  const { user } = props
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-400 bg-learngray py-2 sm:hidden">
        <div className="mr-44">
          <img src={learnLogo} alt="logo" className="scale-[75%]"/>
        </div>
        <nav>
          <section className="MOBILE-MENU flex mr-4">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-learnpurple"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-learnpurple"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-learnpurple"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
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
              <ul className="MENU-LINK-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-center">
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
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
      {/* <div className="flex border-b border-gray-400  py-2">
        <div className="left-0">
          <img src={learnLogo} alt="logo" className="flex  scale-50" />
        
          <nav>
            <section className="MOBILE-MENU ">
              <div
                className="HAMBURGER-ICON space-y-2"
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div>
                <div
                  className="absolute top-0 right-0 px-8 py-4"
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
                <ul className="NAVIGATION-MOBILE-OPEN flex min-h-[100px] flex-col items-center ">
                  
                  <li className="my-4 border-b border-gray-400 uppercase">
                    
                  </li>
                </ul>
              </div>
            </section>
          </nav>
        </div>
      </div> */}
      {/* Large screen header below */}
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