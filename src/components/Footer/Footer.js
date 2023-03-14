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
          <center className="cursor-pointer mt-4 hover:text-learnpurple">
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
                      className="mr-4 md:mr-6 hover:text-learnpurple"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacypolicy"
                      className="mr-4 md:mr-6 hover:text-learnpurple"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/termsofuse"
                      className="mr-4 md:mr-6 hover:text-learnpurple"
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
  )
}

export { Footer }