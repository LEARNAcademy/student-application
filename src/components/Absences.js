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
    <>
      <div className="font-bold text-red-900" id="absence">Absence: {absence}</div>
      
    </>
  )
}

export { Absences }
