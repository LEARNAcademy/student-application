import React, { useState } from "react"
import { Header } from "../../components/Header/Header"
import { Checkbox, Label, TextInput } from "flowbite-react"

const StudentLogin = (props) => {
  const { login,navigate } = props
  const [field, setField] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    setField(
      {
        ...field,
        [event.target.name]: event.target.value
      }
    )
  }
  const handleSubmit = (e) => {
    const handleUserLoginObject={field}
    props.user(handleUserLoginObject)
    e.preventDefault()

    if(login) {
      navigate("/")
    }
  }
  
  return (
    <>
      <Header />
      <div className="h-screen bg-white py-24 font-['gesta'] sm:pt-52">
        <div className="my-8 rounded-xl border-4 bg-zinc-700 sm:m-auto sm:h-96 sm:w-96">
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center border-transparent p-8 sm:pt-12">
            <div className="sm:m-auto sm:mb-4 sm:w-52">
              <div className="mb-2 block text-center">
                <Label
                  htmlFor="email1"
                > 
                  <div className="text-2xl text-loginlabels">Email</div>
                </Label>
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="student@LEARN.com"
                required={true}
                onChange={(e)=> handleChange(e)}
              />
            </div>
            <div className="m-auto mb-2 w-52">
              <div className="mb-2 block text-center">
                <Label
                  htmlFor="password1"
                >
                  <div className="text-2xl text-loginlabels">Password</div>
                </Label>
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                required={true}
                onChange={(e)=> handleChange(e)}
              />
            </div>
            <div className="m-auto mt-4 mb-6 flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                <div className="text-loginremember">Remember me</div>
              </Label>
            </div>
            <div className="flex h-auto cursor-pointer select-none items-center justify-center border-2 border-[#A670AF] bg-[#95649d] py-2 px-4 font-medium text-white hover:bg-white hover:text-[#A670AF]">
              <button type="submit" >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { StudentLogin }