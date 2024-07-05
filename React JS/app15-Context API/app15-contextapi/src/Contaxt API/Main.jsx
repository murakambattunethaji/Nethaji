import React, { useState } from 'react'
import Parent from './Parent'
import { Maincontaxtprovider } from './Maincontaxt'

const Main = () => {
  const [message, setmessage] = useState("welcome from main to chaild component")     
  const [greeting,setgreeting]=useState("hello from context api")
  return (
    <div id='main'>
      <h1>main  1</h1>

      <Maincontaxtprovider value={greeting}>

        <Parent message={message} />

      </Maincontaxtprovider>
    </div>
  )
}

export default Main
