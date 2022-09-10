import React from "react"
import { Header } from "../../components/Header"
import { Checkbox, Button, Label, TextInput } from "flowbite-react"


const StudentLogin = () => {
  return (
    <>
      <Header />
      <div className="bg-[#313133] h-screen pt-52 pr-80 pl-80 font-['gesta']">
        <div className="border-4 mx-36 h-80 border-transparent bg-fuchsia-400 rounded-lg">
          <form className="flex flex-col gap-4 pt-10">
            <div className="w-3/6 ml-[10rem]">
              <div className="mb-2 block text-center">
                <Label
                  class="text-xl"
                  htmlFor="email1"
                  value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="student@LEARN.com"
                required={true} />
            </div>
            <div className="w-3/6 ml-[10rem]">
              <div className="mb-2 block text-center">
                <Label
                  class="text-xl"
                  htmlFor="password1"
                  value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required={true} />
            </div>
            <div className="flex items-center gap-2 ml-[16rem]">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <div className="ml-[17rem]">
              <Button type="submit" class="bg-learngreen rounded-lg">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { StudentLogin }