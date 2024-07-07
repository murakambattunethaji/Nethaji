import React, { useState } from 'react'

function HOC_component(Clickcounter) {



  const Newcomp = () => {
    const [user, setuser] = useState(0)

    const increase = () => {
      setuser(user + 1)
    }

    const decress = () => {
      setuser(user - 1)
    }
    return <Clickcounter user={user} increase={increase} decress={decress} />
     
  }

  return Newcomp
}

export default HOC_component
