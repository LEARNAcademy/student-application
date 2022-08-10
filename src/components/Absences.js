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
    <div className="font-medium text-5xl flex items-center" id="absence">
      Absences: <span className="ml-2 flex items-center justify-center text-red-600">{absence}</span>
    </div>
  )
}

export { Absences }
