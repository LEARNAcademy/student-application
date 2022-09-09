import React, { useEffect, useState } from "react"

const Attendance = ({absences}) => {
  let [statusColor, setStatusColor] = useState([ "bg-red-600", "bg-red-600", "bg-red-600", "bg-orange-500", "bg-orange-500", "bg-orange-500", "bg-yellow-300", "bg-yellow-300", "bg-yellow-300", "bg-green-500", "bg-green-500", "bg-green-500", "bg-green-600", "bg-green-600", "bg-green-600" ])

  const absenceUpdate = (absences) => {
    let updateAbsence = [...statusColor]
    for(let i = statusColor.length - Math.ceil(3 * absences); i < statusColor.length; i++) {
      updateAbsence[i] = "bg-white"
    }
    setStatusColor(updateAbsence)
  }

  useEffect(() => {
    absenceUpdate(absences)
  }, [])

  return(
    <> 
      <div className="mt-6 inline-flex h-2.5 w-full rounded-full">
        {statusColor.map((color, index) => {
          return(
            <div key={index} className={`h-2.5 w-1/3 rounded-full ${color}`}></div>
          )})
        }
      </div>
      <div className="mb-1 flex justify-between">
        <span className="ml-2 font-medium text-black dark:text-white">5</span>
        <span className="ml-2 mr-44 font-medium text-black dark:text-white">3</span>
        <span className="ml-2 font-medium text-black dark:text-white">Awesome</span>
      </div>
    </>
  )
}

export { Attendance } 