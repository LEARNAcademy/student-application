import React from "react" 
import learnSymbol from "../../assets/learn-icon.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <hr className="h-0 w-[83vw] border-black"></hr>
      </div>
      <main className="flex justify-center">
        <div className="mb-3 flex w-[83vw] flex-col lg:flex-row lg:justify-between">
          <div className="lg:flex lg:justify-start">
            <center className="mt-4 cursor-pointer hover:text-learnpurple">
              <Link to="/" className="w-12">
                <img
                  src={learnSymbol}
                  className="mb-1 h-8 w-12"
                  alt="Learn Logo"
                />
              </Link>
              <span className="block text-center ">
                {" "}
                <Link to="/">© 2023 LEARN</Link>
              </span>
            </center>
          </div>
          <div className="flex justify-center">
            <div className="flex h-auto py-4 text-lg lg:justify-end">
              <div className="font-['gesta'] sm:flex sm:justify-evenly lg:flex">
                <ul className="mb-6 flex flex-wrap items-center justify-center pt-4 sm:mb-0">
                  <li>
                    <Link
                      to="/aboutus"
                      className="mr-4 hover:text-learnpurple md:mr-6"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacypolicy"
                      className="mr-4 hover:text-learnpurple md:mr-6"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/termsofuse"
                      className="mr-4 hover:text-learnpurple md:mr-6"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/codeofconduct"
                      className="mr-4 hover:text-learnpurple"
                    >
                      Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link to="/contributors" className=" hover:text-learnpurple">
                      Contributors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export { Footer }