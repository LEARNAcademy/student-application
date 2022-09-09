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
      <div className="flex items-center text-2xl font-medium" id="absence">
        Absences: <span className="ml-2 flex items-center justify-center text-red-600">{absence}</span>
      </div>
      {/* <br></br> */}
    </>
  )
}

export { Absences }
      
