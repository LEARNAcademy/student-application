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
          className="mt-32 text-3xl text-learnpurple sm:my-2 sm:text-2xl sm:text-learnpurple"
        >
          {`Welcome, ${greeterName(currentUser)}!`}
        </div>
      )}
    </>
  )
}

export { Greeter }
