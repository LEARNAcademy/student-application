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
    
    <div id="greeting" className="py-1 font-mono text-xl text-green-600">      
      {`Welcome, ${greeterName(user)}!`}
    </div>
  )
}

export { Greeter }