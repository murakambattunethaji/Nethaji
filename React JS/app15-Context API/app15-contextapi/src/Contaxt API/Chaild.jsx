import React from 'react'
import { Maincontaxtconsumer } from './Maincontaxt'

const Chaild = ({message}) => {
  return (
    <div id='chaild'>
        <h3>chaild   3</h3>
      <h2>{message}</h2>

      <Maincontaxtconsumer>
        {(value)=>{
          return <h1 style={{color:'blue'}}>{value}</h1>
        }}
      </Maincontaxtconsumer>
    </div>
  )
}

export default Chaild
