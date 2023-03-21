import React, { useState } from "react"
import learnLogo from "../../assets/learn-academy-logo.png"
import { Navigation } from "../Navigation/Navigation"
import { Greeter } from "../Greeter/Greeter"

const Header = ({ user, login, setLogin, currentUser }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 flex w-full items-center justify-between border-b border-gray-400 bg-learngray py-2 sm:hidden">
        <div className="mr-44">
          <a href="/">
            <img src={learnLogo} alt="logo" className="scale-[75%]" />
          </a>
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
                <Greeter user={user} currentUser={currentUser} />
                <ul className="mb-6 sm:mb-0">
                  <li>
                    <a
                      href="/login"
                      className="block items-center justify-center border-b border-learngray text-center text-learnpurple hover:text-learnblack"
                    >
                      Log Out
                    </a>
                  </li>
                  <div className="my-6 text-right">
                    <li>
                      <a
                        href="/aboutus"
                        className="mr-4  hover:text-learnpurple md:mr-6 "
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacypolicy"
                        className="mr-4  hover:text-learnpurple md:mr-6"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/termsofuse"
                        className="mr-4  hover:text-learnpurple md:mr-6 "
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a
                        href="/codeofconduct"
                        className="mr-4  hover:text-learnpurple"
                      >
                        Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contributors"
                        className="mr-4  hover:text-learnpurple"
                      >
                        Contributors
                      </a>
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
          <a href="/">
            <img
              src={learnLogo}
              className="ml-2 h-10 w-28 sm:h-auto sm:w-72"
              alt="Learn Academy Logo"
            />
          </a>
        </div>
        <div className="flex flex-row items-start sm:items-center">
          {user && (
            <div className="mx-10">
              <Greeter user={user} currentUser={currentUser} />
            </div>
          )}
          <Navigation user={user} login={login} setLogin={setLogin} />
        </div>
      </div>
    </>
  )
}

export { Header }
