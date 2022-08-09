import React, { useState } from "react"
import { Button } from "./Button"

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="mr-10">
      {loggedIn ? 
        <Button text={"Log Out"} onClick={() => setLoggedIn(false)} />
        :
        <Button text={"Log In"} onClick={() => setLoggedIn(true)} />
      }
    </div>
  )
}

export { Navigation }