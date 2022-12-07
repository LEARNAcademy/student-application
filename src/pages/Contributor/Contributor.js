import React from "react"
import { contributors } from "../../contributor.js"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linked-in.svg"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card } from "flowbite-react"

const Contributor = () => {
  return (
    <>
      <Header />
      <div className="mx-auto my-16 h-auto w-[90%] text-[#616161]">
        <h1 className="mt-4 mb-12 text-4xl font-semibold text-learnblack">
          Contributors
        </h1>

        <p className="my-3 text-[#616161]">Chainsaw werewolf spooky blood werewolf chainsaw nightmare. Black cat blood abomination scare candy mummy candy. Nightmare afraid haunted spooky skeleton boo candy. Scare haunted trick-or-treat blood chainsaw mummy candy. Candy nightmare cauldron vampire afraid chainsaw candy.</p>
      </div>

      <div className="m-8 flex flex-wrap">
        {contributors.map((contributor) => (
          <div className="m-8 w-72" key={contributor.id}>
            <Card>
              <div>
                <img
                  className="h-20 w-20 rounded-full"
                  src={contributor.image} alt="contributor-image"
                />
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {contributor.name}
                </h1>
                <div>
                </div>
              </div>
              <div>
                <h2 className="flex-wrap font-normal text-[#616161]">
                  {contributor.cohort}
                </h2>
              </div>
              <div className=" h-44 w-56 ">
                <div>
                  <p className="flex-wrap font-normal text-[#616161]">
                    {contributor.bio}
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <div className="mx-8">
                  <a href={contributor.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    <img src={github} />
                  </a>
                </div>
                <div className="mx-8">
                  <a href={contributor.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    < img src={linkedin} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export { Contributor }
