import arrowBox from "../../../assets/arrow-box.svg"
import { Modal } from "flowbite-react"
import React, { useState } from "react"

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
          cursor-pointer
          text-[#A670AF]
          hover:underline
          "
      >
        Attendance Policy
        <img 
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
              Attendance Policy
            </Modal.Header>
            <Modal.Body>
              <div className="h-[60vh] space-y-6 overflow-y-auto p-6 pt-2 font-gesta">
                <p>Regular and punctual attendance is an important part of a student&#39;s education. Class begins promptly and attendance is strictly monitored. Students should not be late. It is disruptive and unprofessional to enter a class that is already underway.</p>
                <p>With the exception of emergencies, students will notify an instructor by Slack message 24 hours in advance of any tardies or absences.</p>
                <p>A student is considered <strong>tardy</strong> if:</p>
                <ul className="list-inside list-disc">
                  <li>they miss the morning check in.</li>
                  <li>they miss one or more hours of class.</li>
                </ul>
                <p>A student is considered <strong>absent</strong> if:</p>
                <ul className="list-inside list-disc">
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



export { AttendancePolicyModal }
