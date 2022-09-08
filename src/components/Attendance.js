import React from "react"
// import { Absences } from "./Absences"

const Attendance = () => {
  //   const { student } = props
  //   const [attendance, setAttendance] =useState(100)
    
  //   const attendanceBar = () => {
  //      if (student.absences === 0)
  //       setAttendence(attendence * 15 / 15)
  //      else (sudent.absences)
  //  }
  
  return(
    <>
      <div className="inline-flex h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="inline-flex h-2.5 w-1/5 rounded-full bg-white">
          <div className="h-2.5 w-1/3 rounded-full bg-red-600"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-red-600"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-red-600"></div>
        </div>
        <div className="inline-flex h-2.5 w-1/5 rounded-full bg-white">          
          <div className="h-2.5 w-1/3 rounded-full bg-orange-500"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-orange-500"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-orange-500"></div>
        </div>
        <div className="inline-flex h-2.5 w-1/5 rounded-full bg-white">          
          <div className="h-2.5 w-1/3 rounded-full bg-yellow-300"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-yellow-300"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-yellow-300"></div>
        </div>
        <div className="inline-flex h-2.5 w-1/5 rounded-full bg-white">          
          <div className="h-2.5 w-1/3 rounded-full bg-green-500"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-green-500"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-green-500"></div>
        </div>
        <div className="inline-flex h-2.5 w-1/5 rounded-full bg-white">          
          <div className="h-2.5 w-1/3 rounded-full bg-green-600"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-white"></div>
          <div className="h-2.5 w-1/3 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="mb-1 flex justify-between">
        <span className="text-sm font-medium text-red-700 dark:text-white">5</span>
        <span className="text-sm font-medium text-yellow-400 dark:text-white">3</span>
        <span className="text-base font-medium text-[#A670AF] dark:text-white">Awesome</span>
      </div>
    </>
  )
}
export default Attendance

// Absences = Absences + tardies
                
// tardies = tardies / 3

// if Absences = 1/3, do this <div className="h-2.5 w-1/3 rounded-full bg-white"></div>
// if Absences = 1 , do this <div className="inline-flex h-2.5 w-1/5 rounded-full bg-white">          


