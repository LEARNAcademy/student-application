import React, { useState, useEffect } from "react"

const Assessment = (props) => {
  const { assessments } = props

  const [statusColor, setStatusColor] = useState([])
  const [assess, setAssess] = useState([])

  const assessmentsUpdate = () => {
    const newAssess = []
    for(let i = 0; i < 6 ; i++) {
      if(assessments[i] && assessments[i].week === i + 1) {
        newAssess.push(assessments[i])
      } else {
        newAssess.push({ week: i+1, status: "unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" })
      }
    }
    setAssess(newAssess)
  }
  
  const colorArray = () => {
    setStatusColor(
      assessments.map(assessment => {
        if(assessment.status === "pending"){
          return "bg-[yellow]"
        } else if(assessment.status === "complete") {
          return "bg-[green]"
        } else if(assessment.status === "incomplete") {
          return "bg-[red]"
        } else if (assessment.status === "unassigned") {
          return "bg-[gray]"
        }
      })
    )
  }

  useEffect(() => {
    assessmentsUpdate(),
    colorArray()
  }, [])

  return (
    <>
      {assess.map((assessment, index) => {        
        return (
          <div id="week" key={index} className="w-full border-b border-black py-10">
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-col">
                <div className="my-1 font-bold">Week {assessment.week} </div>
                <div className="my-1"><strong>Comprehension:</strong> {assessment.comprehension}</div>
              </div>
              <div className="flex flex-col">
                <div className="flex w-full flex-row items-center">
                  <span className={`mr-2 h-4 w-4 rounded-full ${statusColor[index]}`}/>
                  <div className="my-1"><strong>Status:</strong> {assessment.status}</div>
                </div>
                <div className="my-1 pl-6"><strong>Reviewer:</strong> {assessment.reviewer} </div>
              </div>
            </div>
            <div className="mt-8"><strong>Notes:</strong> <br/>{assessment.notes} </div>
          </div>
        )
      })}
    </>
  )
}

export { Assessment }
