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
            <p>{"Regular and punctual attendance is an important part of a student's education. Class begins promptly and attendance is strictly monitored. Students should not be late. It is disruptive and unprofessional to enter a class that is already underway."}</p>
            <p>With the exception of emergencies, students will notify an instructor by Slack message 24 hours in advance of any tardies or absences.</p>
            <p>A student is considered <strong>tardy</strong> if:</p>
            <ul>- they miss the morning check in.</ul>
            <ul>- they miss one or more hours of class.</ul>
            <p>A student is considered <strong>absent</strong> if:</p>
            <ul>- they miss three or more hours of class.</ul>
            <ul>- they accrue three tardies.</ul>
            <p>If three absences occur for any reason, the status of the student will be reviewed by the instructor to determine a disposition. If five absences occur for any reason, the status of the student will be reviewed by the instructor to determine internship eligibility.</p>
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
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export { AttendancePolicyModal, ComprehensionModal }
