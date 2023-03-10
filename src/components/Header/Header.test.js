import React from "react"
import { Header } from "./Header"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

describe("<Header />", () => {

  const user = {id: 1, email: 'bob@bobemail.com', preferred_name: 'manMountain', student: {absences: 0}}

  const login = true
  const setLogin = true
  const isNavOpen = true

  it('displays Header', () => {
    render(
      <BrowserRouter>
        <Header user={user} login={login} setLogin={setLogin} isNavOpen={isNavOpen} />
      </BrowserRouter>
    )
    expect(screen.getByAltText('logo', {
      name: /logo/i
    })).toBeInTheDocument()
  })
})