import React from "react"
import { CodeOfConduct } from "./CodeOfConduct"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"

describe("<CodeOfConduct />", () => {
  it("renders intro paragraph", () => {
    render(
      <BrowserRouter>
        <CodeOfConduct />
      </BrowserRouter>
    )
    expect(
      screen.getByText(
        /at learn academy, we strive to be a positive voice in the san diego tech community\. our goals are to be welcoming and inclusive and to provide a space for any person who wants to code\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /the administration at learn academy, endeavors to build a brave, inclusive space—online, in the classroom, and at our events\. a primary assumption of a brave space is that everyone speaks with the positive intent of seeking greater knowledge and understanding of differing perspectives and experiences\. to promote a spirit of inclusivity, we ask our instructors, students, mentors, and guests to follow a few foundational principles while sharing our space\. these principles are embodied by, but not limited to, the following statements:/i
      )
    ).toBeInTheDocument()
  })
  it("renders headers", () => {
    render(
      <BrowserRouter>
        <CodeOfConduct />
      </BrowserRouter>
    )
    expect(
      screen.getByRole("heading", {
        name: /we are welcoming, friendly, and patient/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /we are welcoming, friendly, and patient/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /we are mindful of vocabulary/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /we use our skills for good/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /reporting inappropriate behavior/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /at learn academy, we promise:/i,
      })
    ).toBeInTheDocument()
  })
  it("renders paragraphs for each header", () => {
    render(
      <BrowserRouter>
        <CodeOfConduct />
      </BrowserRouter>
    )
    expect(
      screen.getByText(
        /individuals work and decisions affect others\. whether writing code, giving a presentation or participating in a discussion, individuals’ actions have consequences\. individuals should take those consequences into account when making decisions\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /we can all experience frustration now and then; coding is hard work and can be exasperating\. how can we ensure that frustration does not get in the way of positive, productive relationships with others\? give yourself grace if you feel frustrated with coding, another member of our community, or with yourself\. learn staff is available at any time for individuals who need to talk through frustration or need help facilitating communication with another member of the community\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /remember that sexist, racist, and other exclusionary jokes or media content can be offensive to others\. consider the content of the music you play, the videos you stream, the images you share, and the language you use in our learning space\. do they contain words or images that some may find offensive or denigrating\? be kind to others, and do not insult or put down another person\. mindfulness often means reevaluating what we consider permissible\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /computers are a revolutionary communication tool, which connects us like never before\. with this connectivity comes a responsibility to respect others’ property and rights on the internet\. our duty goes beyond following the law, which is a must\. at learn academy, we use our facility, resources, and skills to do “good” in the community\. we help others make the internet safe as well, by following best practices of netizenship, such as reporting issues found on the internet or within our community in a manner consistent with learn academy’s values\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /we care about individuals’ experiences while they are with us at learn academy\. chelsea and bryan are trained in conflict resolution and diversity and inclusion issues, and they are available to talk with individuals about any topic\. if an individual’s experience as a member of the learn academy community has made them uncomfortable, feel unwelcome, or has in any other way not met their expectations of a professional learning environment, we are here to listen and to protect the brave space\./i
      )
    ).toBeInTheDocument()
  })
  it("renders links to individuals for help or private messaging", () => {
    render(
      <BrowserRouter>
        <CodeOfConduct />
      </BrowserRouter>
    )
    expect(
      screen.getByRole("link", {
        name: /chelsea@learnacademy\.org/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", {
        name: /sarah@learnacademy\.org/i,
      })
    ).toBeInTheDocument()
  })
})
