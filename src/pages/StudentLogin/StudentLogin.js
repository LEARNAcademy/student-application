import React from "react"
import { Header } from "../../components/Header"
import { Checkbox, Label, TextInput } from "flowbite-react"
import { useNavigate } from "react-router-dom"
// import { user } from "../../userMock"

const StudentLogin = (props) => {
  const { login,setLogin } = props
  const navigate = useNavigate()

  const navigateHome = () => {
    setLogin
    navigate("/")
  }
  
  console.log(login, navigateHome)
  
  return (
    <>
      <Header />
      <div className="h-screen bg-slate-200 pt-52 font-['gesta']">
        <div className="m-auto h-96 w-96 rounded-xl border-4 bg-zinc-700">
          <form className="flex flex-col items-center justify-center border-transparent pt-12">
            <div className="m-auto mb-4 w-52">
              <div className="mb-2 block text-center">
                <Label
                  htmlFor="email1"
                > 
                  <div className="text-2xl text-learnpurple">Email</div>
                </Label>
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="student@LEARN.com"
                // required={true}
              />
            </div>
            <div className="m-auto mb-2 w-52">
              <div className="mb-2 block text-center">
                <Label
                  htmlFor="password1"
                >
                  <div className="text-2xl text-learnpurple">Password</div>
                </Label>
              </div>
              <TextInput
                id="password1"
                type="password"
                // required={true} 
              />
            </div>
            <div className="m-auto mt-4 mb-6 flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                <div className="text-learnpurple">Remember me</div>
              </Label>
            </div>
            <div className="m-auto w-20 rounded-full bg-learngreen text-center text-lg">
              <button type="submit" onClick={() => navigateHome}>
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