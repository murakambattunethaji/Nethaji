import React from 'react'
import { useState } from 'react'
import HOC_component from './HOC_component'

const Clickcounter = (props) => {
  const { user, increase, decress } = props
  return (
    <div>
      <h1>click in {user} times</h1>
      <button className='btn btn-primary' onClick={increase}>click me increase</button> <br /> <br />
      <button className='btn btn-danger' onClick={decress}>click me decress</button>

    </div>
  )
}

export default HOC_component(Clickcounter)
