import React, { useState } from "react"
import { Header } from "../../components/Header"
import { Checkbox, Label, TextInput } from "flowbite-react"

const StudentLogin = (props) => {
  const { login,setLogin,navigate } = props
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
    e.preventDefault()
    setLogin(true)
    if(login) {
      navigate("/studentdash")
    }
  }
  
  
  return (
    <>
      <Header />
      <div className="py-24 h-screen font-['gesta'] bg-slate-200 sm:pt-52">
        <div className="my-8 bg-zinc-700 rounded-xl border-4 sm:m-auto sm:w-96 sm:h-96">
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center items-center p-8 border-transparent sm:pt-12">
            <div className="sm:m-auto sm:mb-4 sm:w-52">
              <div className="block mb-2 text-center">
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
              <div className="block mb-2 text-center">
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
            <div className="flex gap-2 items-center m-auto mt-4 mb-6">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                <div className="text-loginremember">Remember me</div>
              </Label>
            </div>
            <div className="m-auto w-20 text-lg text-center bg-learngreen rounded-full">
              <button type="submit" >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { StudentLogin }