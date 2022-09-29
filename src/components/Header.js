import React, { useState } from "react"
import learnLogo from "../assets/LEARN_Academy_logo-purple.png"
import { Navigation } from "./Navigation"
import { Greeter } from "../components/Greeter"

const Header = (props) => {
  const { user, login, setLogin } = props
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center py-2 bg-learngray border-b border-gray-400 sm:hidden">
        <div className="mr-44">
          <img src={learnLogo} alt="logo" className="scale-[75%]" />
        </div>
        <nav>
          <section className="flex mr-4">
            <div
              className="space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block w-8 h-0.5 bg-learnpurple animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-learnpurple animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-learnpurple animate-pulse"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 p-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="w-8 h-8 text-gray-600"
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
              <div className="flex flex-col justify-center items-center min-h-[250px]">
                <Greeter user={user} />
                <Navigation user={user} login={login} setLogin={setLogin} />
              </div>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
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
      <div className="hidden sm:flex sm:justify-between sm:items-center sm:bg-[#313133]">
        <div className="flex flex-row">
          <img
            src={learnLogo}
            className="ml-2 w-28 h-10 sm:w-72 sm:h-auto"
            alt="Learn Academy Logo" />
        </div>
        <div className="flex flex-row items-start sm:items-center">
          {user && <div className="mx-10">
            <Greeter user={user} />
          </div>}
          <Navigation user={user} login={login} setLogin={setLogin} />
        </div>
      </div>
    </>
  )
}

export { Header }