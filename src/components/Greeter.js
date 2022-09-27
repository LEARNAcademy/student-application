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
    <div id="greeting" className="mr-1 mb-4 text-3xl text-learngray xs:ml-6 sm:pt-4 sm:text-2xl sm:text-white">      
      {`Welcome, ${greeterName(user)}!`}
    </div>
  )
}

export { Greeter }