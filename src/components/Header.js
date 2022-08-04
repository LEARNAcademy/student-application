import React from 'react'
import { Navbar, Button } from 'flowbite-react'
import learnLogo from '../assets/LEARN_Academy_logo-purple.png'

const Header = () => {
  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src= { learnLogo }
      className="mr-3 h-6 sm:h-20"
      alt="Learn Academy Logo"
    />
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
      Log In
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Sean
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      The Don
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Logan
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Davon
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      JB
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export { Header }
