import React, { useState } from "react"
import learnLogo from "../../assets/learn-academy-logo.png"
import { Navigation } from "../Navigation/Navigation"
import { Link } from "react-router-dom"


const Header = ({ user, login, setLogin }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 flex w-full items-center justify-between border-b border-gray-400 bg-learngray py-2 sm:hidden">
        <div className="mr-44">
          <Link to="/">
            <img src={learnLogo} alt="logo" className="scale-[75%]" />
          </Link>
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

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
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
              <div className="flex min-h-[250px] flex-col justify-center">
                <ul className="mb-6 sm:mb-0">
                  <li>
                    <Link
                      to="/login"
                      className="block items-center justify-center border-b border-learngray text-center text-learnpurple hover:text-learnblack"
                    >
                      Log Out
                    </Link>
                  </li>
                  <div className="my-6 text-right">
                    <li>
                      <Link
                        to="/aboutus"
                        className="mr-4  hover:text-learnpurple md:mr-6 "
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/privacypolicy"
                        className="mr-4  hover:text-learnpurple md:mr-6"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/termsofuse"
                        className="mr-4  hover:text-learnpurple md:mr-6 "
                      >
                        Terms of Use
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/codeofconduct"
                        className="mr-4  hover:text-learnpurple"
                      >
                        Code of Conduct
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contributors"
                        className="mr-4  hover:text-learnpurple"
                      >
                        Contributors
                      </Link>
                    </li>
                  </div>
                </ul>
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
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:bg-[#313133]">
        <div className="flex flex-row">
          <Link to="/">
            <img
              src={learnLogo}
              className="ml-2 h-10 w-28 sm:h-auto sm:w-72"
              alt="Learn Academy Logo"
            />
          </Link>
        </div>
        <div className="flex flex-row items-start sm:items-center">
          {user && (
            <div className="mx-10">
            </div>
          )}
          <Navigation user={user} login={login} setLogin={setLogin} />
        </div>
      </div>
    </>
  )
}

export { Header }
