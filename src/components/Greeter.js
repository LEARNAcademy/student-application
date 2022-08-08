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
    
    <div id="greeting" className="text-xl ltext-green-600 font-mono py-1">      
      {`Welcome, ${greeterName(user)}!`}
    </div>
  )
}

export { Greeter }