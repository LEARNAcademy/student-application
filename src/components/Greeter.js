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
    <div id="greeting" className="mr-4 mb-8 py-1 text-lg text-white xs:ml-10 xs:m-9 sm:ml-32 sm:text-2xl">      
      {`Welcome, ${greeterName(user)}!`}
    </div>
  )
}

export { Greeter }