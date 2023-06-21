import React, { useEffect, useState } from "react"

const Attendance = ({absences}) => {
  let [statusColor, setStatusColor] = useState([ "bg-red-600", "bg-red-600", "bg-red-600", "bg-orange-500", "bg-orange-500", "bg-orange-500", "bg-yellow-300", "bg-yellow-300", "bg-yellow-300", "bg-green-500", "bg-green-500", "bg-green-500", "bg-green-600", "bg-green-600", "bg-green-600" ])

  const absenceUpdate = () => {
    let updateAbsence = [...statusColor]
    for(let i = statusColor.length - Math.ceil(3 * absences); i < statusColor.length; i++) {
      updateAbsence[i] = "bg-white"
    }
    setStatusColor(updateAbsence)
  }

  useEffect(() => {
    absenceUpdate(absences)
  }, [absences])

  return(
    <>
      <div>
        <table className="w-full">
          <tbody>
            <tr>
              {statusColor.map((color, index) => {
                return <td key={index} className={`h-2.5 min-w-[19px] rounded-full ${color} outline`}></td>
              })
              }
            </tr>
            <tr>
              {statusColor.map((color, index) => {        
                if(index % 3 === 0){
                  return <td key={index} >{ -1 * ((index / 3) - 5)} </td>
                } else {
                  return <td key={index}> </td>
                }
              })
              }
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export { Attendance }