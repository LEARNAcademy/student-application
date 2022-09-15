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

  const navigateHome = (e) => {
    e.preventDefault()
    setLogin(true)
  }
  
  if(login) {
    navigate("/studentdash")
  }
 
  return (
    <>
      <Header />
      <div className="h-screen bg-slate-200 pt-52 font-['gesta']">
        <div className="m-auto h-96 w-96 rounded-xl border-4 bg-zinc-700">
          <form onSubmit={(e) => navigateHome(e)} className="flex flex-col items-center justify-center border-transparent pt-12">
            <div className="m-auto mb-4 w-52">
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
            <div className="m-auto w-20 rounded-full bg-learngreen text-center text-lg">
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