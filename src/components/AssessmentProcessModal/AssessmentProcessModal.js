import React, { useState } from "react"
import { Modal } from "flowbite-react"
import arrowBox from "../../assets/arrow-up-right-from-square-solid.svg"

const AssessmentProcessModal = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    if(visible) {
      document.body.style.overflow=""
      setVisible(false)
    } else {
      document.body.style.overflow="hidden"
      setVisible(true)
    }
  }

  return (
    <>
      <div onClick={()=> handleClick()}
        className="
          inline-flex
          cursor-pointer
          text-[#A670AF]
          hover:underline
          "
      >
        Assessment Policy
        <img alt="Assessment Policy Icon"
          src={arrowBox} 
          className="ml-2 h-auto w-5"
        />
      </div>
      <div id="modal-container" onClick={() => handleClick()}>
        <Modal
          show={visible}
          onClose={() => handleClick()}
        >
          <div id="modal-inner" onClick={(e) => e.stopPropagation()}>
            <Modal.Header>
              Assessment Policy
            </Modal.Header>
            <Modal.Body>
              <div className="h-[60vh] space-y-6 overflow-y-auto p-6 pt-2 font-gesta">
                <p>Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.</p>
                <p>A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.</p>
                <p>The step-by-step instructions <a href="https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md" className="text-purple-600 hover:text-purple-800 visited:text-purple-400"><strong><u>here</u></strong></a> breakdown the git and GitHub process for this assessment.</p>
                <p>Assessment should be accessed through the GitHub Classroom link provided to you in Slack. PRs should be posted <i>before</i> class begins on Monday.</p>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </>
  )
}

export { AssessmentProcessModal }