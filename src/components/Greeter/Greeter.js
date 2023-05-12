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
          className="absolute top-10 right-40 m-4 text-3xl text-learngray sm:m-2 sm:text-2xl sm:text-learnpurple"
        >
          {`Welcome, ${greeterName(currentUser)}!`}
        </div>
      )}
    </>
  )
}

export { Greeter }
