import React from "react"
import { Header } from "../../components/Header"
import { Checkbox, Button, Label, TextInput } from "flowbite-react"


const StudentLogin = () => {
  return (
    <>
      <Header />
      <div className="bg-[#313133] h-screen pt-52 font-['gesta']">
        <div className="border-4 h-96 w-96 m-auto bg-fuchsia-400 rounded-lg">
          <form className="flex flex-col justify-center items-centerborder-transparent pt-12">
            <div className="w-52 m-auto mb-4">
              <div className="mb-2 block text-center">
                <Label
                  class="text-2xl"
                  htmlFor="email1"
                  value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="student@LEARN.com"
                required={true} />
            </div>
            <div className="w-52 m-auto mb-2">
              <div className="mb-2 block text-center">
                <Label
                  class="text-2xl"
                  htmlFor="password1"
                  value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required={true} />
            </div>
            <div className="flex items-center gap-2 m-auto mt-4 mb-6">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <div className="m-auto">
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