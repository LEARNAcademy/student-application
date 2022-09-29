import React, { useState } from "react"
import { Modal } from "flowbite-react"
import arrowBox from "../assets/arrow-up-right-from-square-solid.svg"

const AttendancePolicyModal = () => {
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
          text-[#A670AF]
          hover:underline
          cursor-pointer
          "
      >
        Attendance Policy
        <img 
          src={arrowBox} 
          className="ml-2 w-5 h-auto"
        />
      </div>
      <div id="modal-container" onClick={() => handleClick()}>
        <Modal
          show={visible}
          onClose={() => handleClick()}
        >
          <div id="modal-inner" onClick={(e) => e.stopPropagation()}>
            <Modal.Header>
              Attendance Policy
            </Modal.Header>
            <Modal.Body>
              <div className="overflow-y-auto p-6 pt-2 space-y-6 h-[60vh] font-gesta">
                <p>Regular and punctual attendance is an important part of a student&#39;s education. Class begins promptly and attendance is strictly monitored. Students should not be late. It is disruptive and unprofessional to enter a class that is already underway.</p>
                <p>With the exception of emergencies, students will notify an instructor by Slack message 24 hours in advance of any tardies or absences.</p>
                <p>A student is considered <strong>tardy</strong> if:</p>
                <ul className="list-disc list-inside">
                  <li>they miss the morning check in.</li>
                  <li>they miss one or more hours of class.</li>
                </ul>
                <p>A student is considered <strong>absent</strong> if:</p>
                <ul className="list-disc list-inside">
                  <li>they miss three or more hours of class.</li>
                  <li>they accrue three tardies.</li>
                </ul>
                <p>If three absences occur for any reason, the status of the student will be reviewed by the instructor to determine a disposition. If five absences occur for any reason, the status of the student will be reviewed by the instructor to determine internship eligibility.</p>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </>
  )
}

const ComprehensionModal = () => {
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
          text-[#A670AF]
          hover:underline
          cursor-pointer
          "
      >
        Comprehension Levels
        <img 
          src={arrowBox} 
          className="ml-2 w-5 h-auto"
        />
      </div>
      <div id="modal-container" onClick={() => handleClick()}>
        <Modal
          show={visible}
          onClose={() => handleClick()}
        >
          <div id="modal-inner" onClick={(e) => e.stopPropagation()}>
            <Modal.Header>
              Assessment Review Process
            </Modal.Header>
            <Modal.Body>
              <div className="overflow-y-auto p-6 pt-2 space-y-6 h-[60vh] font-gesta">
                <p>When an instructor reviews a student&#39;s assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels during the learning process. At LEARN, students will be evaluated as novice, advanced beginner, or competent skill level.</p>
                <p>Skill levels measure current understanding and allow for growth over time.</p>
                <strong>Skill levels are not grades!</strong>
                <p><strong>Incomplete</strong></p>
                <p>An assessment that is considered incomplete is one that did not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able access the next assessment until the current one is complete.</p>
                <p><strong>Complete</strong></p>
                <p>An assessment that is considered complete is one that met the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.</p>
                <p><strong>Novice</strong></p>
                <p>The novice stage is the first level of skill acquisition. In the novice level, the student is beginning to understand the skill and requires a step-by-step recipe to produce an output. An assessment that is considered at the novice level of skill acquisition is one that met the requirements of a valid attempt on every question while closely following process notes from class.</p>
                <p><strong>Advanced Beginner</strong></p>
                <p>The advanced beginner stage is the second level of skill acquisition. In the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the recipe will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class.</p>
                <p><strong>Competent</strong></p>
                <p>The competent stage is the third level of skill acquisition. In the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own recipe to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources.</p>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </>
  )
}

export { AttendancePolicyModal, ComprehensionModal }
