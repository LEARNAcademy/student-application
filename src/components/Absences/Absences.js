import React from "react"

const Absences = ({ currentUser }) => {
    
  return (
    <div className="mt-10 flex items-center text-2xl font-medium sm:mt-0" id="absence">
      Absences: <span className="ml-2 flex items-center justify-center">{currentUser.absences}</span>
    </div>
  )
}

export { Absences }