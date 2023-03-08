import React from "react" 
import learnSymbol from "../../assets/learn-icon.svg"

const Footer = () => {
  return (
    <>
      <center className="mt-4">
        <a href="/" className="w-12">
          <img src={learnSymbol} className="h-8 w-12" alt="Learn Logo" />
        </a>
      </center>
      <div className="h-auto px-8 py-4 text-lg lg:px-8">
        <div className="font-['gesta'] sm:flex sm:justify-evenly">
          <ul className="mb-6 flex flex-wrap items-center justify-center sm:mb-0">
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
        </div>
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <span className="block text-center "> <a href="/" className="hover:text-learnpurple">© 2022 LEARN</a>
        </span>
      </div>
    </>
  )}

export { Footer }