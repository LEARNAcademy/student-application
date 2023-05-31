import React, { useState, useEffect } from "react"

const Assessment = ({ currentUser }) => {
  const [assessments, setAssessments] = useState([])

  useEffect(() => {
    if (currentUser?.assessment) {
      setAssessments(currentUser?.assessment)
    }
  }, [currentUser])
  
  return (
    <div className="px-12 sm:px-32">
      {assessments.map((assessment, index) => {
        return (
          <div
            id="week"
            key={index}
            className="w-full border-t border-black py-10"
          >
            <div className="w-full flex-row justify-between md:flex lg:flex xl:flex">
              <div className="flex flex-col">
                <div className="my-1 text-xl font-bold">
                  Week {assessment.week}{" "}
                </div>
                <div className="my-1 text-lg">
                  <strong>Comprehension:</strong> 
                  {assessment.comprehension === "Unassigned" && (
                    <span className="mx-1 inline-block w-28 rounded-lg bg-red-300 text-center">
                      Unassigned
                    </span>
                  )}
                  {assessment.comprehension === "Complete" && (
                    <span className="mx-1 inline-block w-28 rounded-lg bg-green-200 text-center">
                      Complete
                    </span>
                  )}
                  {assessment.comprehension === "Novice" && (
                    <span className="mx-1 inline-block w-28 rounded-lg bg-[#A670AF]/20 text-center">
                      Novice
                    </span>
                  )}
                  {assessment.comprehension === "Advanced Beginner" && (
                    <span className="mx-1 inline-block w-28 rounded-lg bg-[#A670AF]/20 text-center">
                      Advanced Beginner
                    </span>
                  )}
                  {assessment.comprehension === "Competent" && (
                    <span className="mx-1 inline-block w-28 rounded-lg bg-[#A670AF]/20 text-center">
                      Competent
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex w-full flex-row items-center">
                  <div className="mx-6 ml-16 text-lg xxs:m-0 xs:m-0 sm:m-0 md:my-1 lg:my-1 xl:my-1">
                    <strong>Status:</strong> 
                    {assessment.status === 0 && (
                      <span className="mx-1 inline-block w-28 rounded-lg bg-red-300 text-center">
                        Incomplete
                      </span>
                    )}
                    {assessment.status === 1 && (
                      <span className="mx-1 inline-block w-28 rounded-lg bg-gray-300 text-center">
                        Unassigned
                      </span>
                    )}
                    {assessment.status === 2 && (
                      <span className="mx-1 inline-block w-28 rounded-lg bg-yellow-100 text-center">
                        Pending
                      </span>
                    )}
                    {assessment.status === 3 && (
                      <span className="mx-1 inline-block w-28 rounded-lg bg-green-200 text-center">
                        Complete
                      </span>
                    )}
                  </div>
                </div>
                <div className="mx-6 ml-16 text-lg xxs:m-0 xs:m-0 sm:m-0 md:my-1 lg:my-1 xl:my-1">
                  <strong>Reviewer:</strong> {assessment.reviewer}{" "}
                </div>
              </div>
            </div>
            <div className="mt-8 w-[30ch] text-base sm:w-[58ch]">
              <strong>Notes:</strong> <br />
              {assessment.notes}{" "}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { Assessment }