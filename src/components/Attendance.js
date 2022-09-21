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
      <div className="flex-1">      
        <tbody className="mt-6 inline-flex h-2.5 w-full rounded-full">
          {statusColor.map((color, index) => {
            return(
              <tr key={index} className={`h-2.5 w-1/3 min-w-[19px] rounded-full  ${color}`}></tr>
            )})
          }
        </tbody>
        
    
        <div className="mb-1 flex-row space-x-[8rem] md:space-x-[21rem] lg:space-x-[29rem] xl:space-x-[38rem]">
          <span className="font-medium text-black dark:text-white">5</span>
          <span className="font-medium text-black dark:text-white">3</span>
          <span className="font-medium text-black dark:text-white">Great</span>
        </div>
      </div>
    </>
  )
}

export { Attendance }