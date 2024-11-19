import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>

      <Router>
        <div className="w-full min-h-screen flex flex-col bg-neutral-50">
          <Navbar />
        </div>
      </Router>

    </>

  )
}

export default App
