import React, { useState } from "react"
import { Button } from "flowbite-react"

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      {loggedIn ? 
        <Button onClick={() => setLoggedIn(false)}>
        Log Out
        </Button>
        :
        <Button onClick={() => setLoggedIn(true)}>
        Log In
        </Button>
      }
    </>
  )
}

export { Navigation }