import React, { useState, useEffect } from "react"

const Absences = (props) => {
  const [absence, setAbsence] = useState(0)
  const { student } = props
    
  useEffect(() => {
    if(student.absences) {
      setAbsence(student.absences)
    }
  },[])
    
  return (
    <div className="mt-32 flex items-center text-2xl font-medium sm:mt-0" id="absence">
      Absences: <span className="ml-2 flex items-center justify-center">{absence}</span>
    </div>
  )
}

export { Absences }