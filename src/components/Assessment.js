import React, { useState, useEffect } from "react"

const Assessment = (props) => {
  const { assessments } = props
  const [ statusColor, setStatusColor] = useState([])
  const [assess, setAssess] = useState([])
  const [ compColor, setCompColor ] = useState([])

  const assessmentsUpdate = () => {
    const newAssess = []
    for(let i = 0; i < 6 ; i++) {
      if(assessments[i] && assessments[i].week === i + 1) {
        newAssess.push(assessments[i])
      } else {
        newAssess.push({ week: i+1, status: "Unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" })
      }
    }
    setAssess(newAssess)
  }
  
  const colorArray = () => {
    setStatusColor(
      assessments.map(assessment => {
        if(assessment.status === "Pending"){
          return "bg-yellow-100"
        } else if(assessment.status === "Complete") {
          return "bg-green-200"
        } else if(assessment.status === "Incomplete") {
          return "bg-red-300"
        } else if (assessment.status === "Unassigned") {
          return "bg-gray-300"
        }
      })
    )
  }

  const compColorArray = () => {
    setCompColor(
      assessments.map(assessment => {
        if(assessment.comprehension === "Incomplete"){
          return "bg-red-300"
        } else if(assessment.comprehension === "Complete") {
          return "bg-green-200"
        } else if(assessment.comprehension === "Novice") {
          return "bg-[#A670AF]/20"
        } else if (assessment.comprehension === "Advanced Beginner") {
          return "bg-[#A670AF]/20"
        } else if (assessment.comprehension === "Competent") {
          return "bg-[#A670AF]/20"
        }
      })
    )
  }

  useEffect(() => {
    assessmentsUpdate(),
    colorArray(),
    compColorArray()
  }, [])

  return (
    <div className="px-12 sm:px-32">
      {assess.map((assessment, index) => {        
        return (
          <div id="week" key={index} className="w-full border-b border-black py-10">
            <div className="w-full flex-row justify-between md:flex lg:flex xl:flex">
              <div className="flex flex-col">
                <div className="my-1 text-xl font-bold">Week {assessment.week} </div>
                <div className="my-1 text-lg"><strong>Comprehension:</strong>
                  <span className={`mx-1 inline-block w-28 rounded-lg text-center  ${compColor[index]}`}>{assessment.comprehension}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex w-full flex-row items-center">
                  <div className="mx-6 ml-16 text-lg xxs:m-0 xs:m-0 sm:m-0 md:my-1 lg:my-1 xl:my-1"><strong>Status:</strong>
                    <span className={`mx-1 inline-block w-28 rounded-lg text-center ${statusColor[index]}`}>{assessment.status}</span>
                  </div>
                </div>
                <div className="mx-6 ml-16 text-lg xxs:m-0 xs:m-0 sm:m-0 md:my-1 lg:my-1 xl:my-1"><strong>Reviewer:</strong> {assessment.reviewer} </div>
              </div>
            </div>
            <div className="mt-8 w-[30ch] text-base sm:w-[58ch]"><strong>Notes:</strong> <br/>{assessment.notes} </div>
          </div>
        )
      })}
    </div>
  )
}

export { Assessment }
