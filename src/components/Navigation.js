import React, { useState } from "react"
import { Button } from "flowbite-react"

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="mr-4">
      {loggedIn ? 
        <Button onClick={() => setLoggedIn(false)}>
        Log Out
        </Button>
        :
        <Button onClick={() => setLoggedIn(true)}>
        Log In
        </Button>
      }
    </div>
  )
}

export { Navigation }