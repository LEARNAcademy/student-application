import React from 'react'

const Assessment = (props) => {
  const { assessments } = props
  return (
    <>
      {assessments.map((assessment, index) => {
        return (
            <div key={index}>
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
