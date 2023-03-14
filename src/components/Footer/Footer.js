import React from "react" 
import learnSymbol from "../../assets/learn-icon.svg"

const Footer = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <hr className="h-0 w-[83vw] border-black"></hr>
      </div>
      <main className="flex justify-center">
        <div className="mb-3 flex w-[83vw] flex-col lg:flex-row lg:justify-between">
          <div className="lg:flex lg:justify-start">
            <center className="hover:text-learnpurple mt-4 cursor-pointer">
              <a href="/" className="w-12">
                <img
                  src={learnSymbol}
                  className="mb-1 h-8 w-12"
                  alt="Learn Logo"
                />
              </a>
              <span className="block text-center ">
                {" "}
                <a href="/">© 2023 LEARN</a>
              </span>
            </center>
          </div>
          <div className="flex justify-center">
            <div className="flex h-auto py-4 text-lg lg:justify-end">
              <div className="font-['gesta'] sm:flex sm:justify-evenly lg:flex">
                <ul className="mb-6 flex flex-wrap items-center justify-center pt-4 sm:mb-0">
                  <li>
                    <a
                      href="/aboutus"
                      className="hover:text-learnpurple mr-4 md:mr-6 "
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacypolicy"
                      className="hover:text-learnpurple mr-4 md:mr-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/termsofuse"
                      className="hover:text-learnpurple mr-4 md:mr-6 "
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/codeofconduct"
                      className="hover:text-learnpurple mr-4"
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
  )
}

export { Footer }