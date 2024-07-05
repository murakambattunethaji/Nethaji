import React from 'react'
import Chaild from './Chaild'

const Parent = ({message}) => {
  return (
    <div id='parent'>
        <h2>parent  2</h2>
      <Chaild message={message}/>
    </div>
  )
}

export default Parent
