import React from "react"
import { Header } from "../../components/Header"
import  { Footer } from "../../components/Footer"

const AboutUs = () => {
  return (
    <>
      <Header/>
      <div className="mx-auto my-16 h-auto w-[90%] text-[#616161] ">
        <h1 className="mt-4 mb-12 font-['gesta'] text-4xl text-learnpurple ">
      About Us
        </h1>
        <p className="my-3 w-[60%]">
      With equal access to knowledge and career development, LEARN academy is teaching a new generation of daring and diverse students to be compassionate, curious and professional web developers. (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)
        </p>
      </div>
      <Footer/>
    </>
  
  )
}

export  { AboutUs }