import React, { useState, useEffect } from "react"

const Assessment = (props) => {
  const [assess, setAssess] = useState([
    { week: 1, status: "unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" },
    { week: 2, status: "unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" },
    { week: 3, status: "unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" },
    { week: 4, status: "unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" },
    { week: 5, status: "unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" },
    { week: 6, status: "unassigned", comprehension: "N/A", reviewer: "N/A", notes: "N/A" }
  ])

  const { assessments } = props
  const newAssess = assess.slice(assessments.length)
  useEffect(() => {
    setAssess(assessments.concat(newAssess))
  }, [])

  return (
    <>
      {assess.map((assessment, index) => {
        return (
          <div id="week" key={index} className="w-1/3 border-b border-black py-10">
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-col">
                <div className="my-1 font-bold">Week {assessment.week} </div>
                <div className="my-1"><strong>Comprehension:</strong> {assessment.comprehension}</div>
              </div>
              <div className="flex flex-col">
                <div className="flex w-full flex-row items-center">
                  <span className="mr-2 h-4 w-4 rounded-full bg-[#ffdd00]" />
                  <div className="my-1"><strong>Status:</strong> {assessment.status}</div>
                </div>
                <div className="my-1 ml-6"><strong>Reviewer:</strong> {assessment.reviewer} </div>
              </div>
            </div>
            <div className="mt-2"><strong>Notes:</strong> <br/>{assessment.notes} </div>
          </div>
        )
      })}
    </>
  )
}

export { Assessment }
