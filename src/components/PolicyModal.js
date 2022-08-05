import React, { useState } from "react"
import { Button, Modal } from "flowbite-react"

const AttendancePolicyModal = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>
    Attendance Policy
      </Button>
      <Modal
        show={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
        Attendance Policy
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
       

            <p>Regular and punctual attendance is an important part of a students education. Class begins promptly and attendance is strictly monitored. Students should not be late. It is disruptive and unprofessional to enter a class that is already underway.</p> 

            <h1>Tardy</h1>

            <p>A student is considered tardy if they miss the morning standup

With the exception of emergencies, students will notify an instructor by Slack message 24 hours in advance of any absences. 

A student is considered absent when they miss one or more hour If three or more absences occur for any reason, the status of the student will be reviewed by the instructor to determine a disposition. If a student reaches three</p>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

const ComprehensionModal = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>
  Comprehension
      </Button>
      <Modal
        show={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
      Comprehension
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
     

            <p>Lorem ipsum</p> 

            <h1>Tardy</h1>
                      
          
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export { AttendancePolicyModal, ComprehensionModal }
