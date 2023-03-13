import React from "react" 
import learnSymbol from "../../assets/learn-icon.svg"

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <hr className="border-1 border-black h-0 w-[83vw]"></hr>
      </div>
      <main className="flex justify-center">
        <div className="w-[83vw] flex flex-col lg:flex-row lg:justify-between mb-3">
          <div className="lg:flex lg:justify-start">
            <center className="mt-4 cursor-pointer hover:text-learnpurple">
              <a href="/" className="w-12">
                <img src={learnSymbol} className="mb-1 h-8 w-12" alt="Learn Logo" />
              </a>
              <span className="block text-center ">
                {" "}
                <a href="/">
                  © 2023 LEARN
                </a>
              </span>
            </center>
          </div>
          <div className="flex justify-center">
            <div className="h-auto py-4 text-lg flex lg:justify-end">
              <div className="font-['gesta'] sm:flex sm:justify-evenly lg:flex">
                <ul className="mb-6 flex flex-wrap items-center justify-center sm:mb-0 pt-4">
                  <li>
                    <a
                      href="/aboutus"
                      className="mr-4 hover:text-learnpurple md:mr-6 "
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacypolicy"
                      className="mr-4 hover:text-learnpurple md:mr-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/termsofuse"
                      className="mr-4 hover:text-learnpurple md:mr-6 "
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/codeofconduct"
                      className="mr-4 hover:text-learnpurple"
                    >
                      Code of Conduct
                    </a>
                  </li>
                  <li>
                    <a href="/contributors" className=" hover:text-learnpurple">
                      Contributors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )}

export { Footer }