import React from "react"

const Greeter = ({ currentUser }) => {
  const greeterName = (userObj) => {
    if (userObj?.name) {
      return userObj?.name
    } else {
      return "Learn Student"
    }
  }

  return (
    <>
      {currentUser && (
        <div
          id="greeting"
          className="mr-1 mb-4 text-3xl text-learngray xs:ml-6 sm:pt-4 sm:text-2xl sm:text-white"
        >
          {`Welcome, ${greeterName(currentUser)}!`}
        </div>
      )}
    </>
  )
}

export { Greeter }
