import React from "react"

const Greeter = (props) => {
  const { user } = props
  const greeterName = (userObj) => {
    if (userObj.preferred_name) {
      return userObj.preferred_name
    } else {
      return "Learn Student"
    }
  }

  return (
    <div id="greeting" className="my-10 ml-32 py-1 text-2xl text-white">      
      {`Welcome, ${greeterName(user)}!`}
    </div>
  )
}

export { Greeter }