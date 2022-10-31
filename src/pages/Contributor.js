import React from "react"
import { contributors } from "../Helper"
import github from "../assets/github.svg"
import Linkedin from "../assets/Linkedin.svg"
import { Header } from "../components/Header"
// import footer from "../components?Footer"
import { Card } from "flowbite-react"

const Contributor = () => {
  return (
    <>
      <Header/>
      <center className="font-gesta text-learnpurple text-2xl">Contributors</center>
      <div className="flex flex-wrap m-8">
        {contributors.map((contributor) => (
          <div className="w-60 m-8">
            <Card>
              <div className="">
                {/* <div className="shrink-0"> */}
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {contributor.name}
                </h5>
              <div>
              </div>
          
              </div>
              <div> 
                <p className="flex-wrap font-normal text-gray-700 dark:text-gray-400">
                  {contributor.bio}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <div className="mx-8">
                <a href={contributor.gitHubb} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  < img src={github}/>
                </a>
                </div>
                <div className="mx-8">
                <a href={contributor.linkedin} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  < img src={Linkedin}/>
                </a>
                </div>
              </div>
            </Card>
            </div>
        ))}
      
        <p className="margin-10px">Chainsaw werewolf spooky blood werewolf chainsaw nightmare. Black cat blood abomination scare candy mummy candy. Nightmare afraid haunted spooky skeleton boo candy. Scare haunted trick-or-treat blood chainsaw mummy candy. Candy nightmare cauldron vampire afraid chainsaw candy.

Pumpkin black cat black cat chainsaw cauldron mummy scare. Candy blood candy nightmare trick-or-treat trick-or-treat afraid. Trick-or-treat trick-or-treat abomination chainsaw drive-in drive-in boo. Werewolf witch pumpkin boo pumpkin skeleton skeleton. Spooky drive-in afraid skeleton vampire nightmare monster.

Werewolf trick-or-treat spooky skeleton jack-o-lantern mummy haunted. Scare nightmare abomination mummy haunted blood afraid. Black cat werewolf nightmare blood trick-or-treat werewolf witch. Black cat monster jack-o-lantern witch mummy candy skeleton. Spooky jack-o-lantern nightmare monster werewolf scare haunted.
        </p>
      </div>
      {/* <Footer/> */}
    </>
  )
}
     

export { Contributor }
