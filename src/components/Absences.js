import React, { useState, useEffect } from "react"

const Absences = (props) => {
  const [absence, setAbsence] = useState(0)
  const { student } = props
    
  useEffect(() => {
    setAbsence(student.absences)
  },[])
    

  return (
    <>
      <div id="absence"> Absence: {absence} </div>
    </>
  )
}

export { Absences }
