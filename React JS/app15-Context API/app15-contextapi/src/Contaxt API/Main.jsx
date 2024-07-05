import React, { useState } from 'react'
import Parent from './Parent'

const Main = () => {
    const[message,setmessage]=useState("welcome from main to chaild component")
  return (
    <div id='main'>
        <h1>main  1</h1>
      <Parent message={message}/>
    </div>
  )
}

export default Main
