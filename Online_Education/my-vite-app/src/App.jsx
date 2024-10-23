import React from 'react'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as router} from 'react-router-dom'

function App (){
  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-neutral  `-50">
        <Navbar/>
      </div>
    </>

  )
}

export default App
