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
          <div id="week" key={index}>
            <div> Week {assessment.week} </div>
            <div> Status: {assessment.status} </div>
            <div> Comprehension: {assessment.comprehension}</div>
            <div> Reviewer: {assessment.reviewer} </div>
            <div> Notes: {assessment.notes} </div>
          </div>
        )
      })}
    </>
  )
}

export { Assessment }
