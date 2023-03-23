import React from "react"
import { contributors } from "../../contributor.js"
import github from "../../assets/github-icon.svg"
import linkedin from "../../assets/linkedin-icon.svg"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { Card } from "flowbite-react"

const Contributor = () => {
  return (
    <>
      <Header />
      <div className="mx-auto mt-32 mb-16 h-auto w-[83vw] text-[#616161] sm:my-16">
        <h1 className="mt-4 mb-12 text-4xl font-semibold text-learnblack">
          Contributors
        </h1>

        <p className="my-3 text-learncarbon">Chainsaw werewolf spooky blood werewolf chainsaw nightmare. Black cat blood abomination scare candy mummy candy. Nightmare afraid haunted spooky skeleton boo candy. Scare haunted trick-or-treat blood chainsaw mummy candy. Candy nightmare cauldron vampire afraid chainsaw candy.</p>
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
                <h2 className="flex-wrap font-normal text-learncarbon">
                  {contributor.cohort}
                </h2>
              </div>
              <div className=" h-44 w-56 overflow-auto">
                <div>
                  <p className="flex-wrap font-normal text-learncarbon">

                    { 
                      contributor.bio.length > 173 ? contributor.bio.slice(0, 173)
                      +"..." : contributor.bio 
                    }
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
