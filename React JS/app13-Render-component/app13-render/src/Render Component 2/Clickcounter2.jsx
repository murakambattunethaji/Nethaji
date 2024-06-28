import React from 'react'

const Clickcounter2 = ({count,handleincrease}) => {
    
  return (
    <div>
        <br />
      <button type='button' onClick={handleincrease} className='btn btn-warning'>click me</button>
      <br /><br />
      <h2>clicked counter {count} Times</h2>
      <hr />
    </div>
  )
}

export default Clickcounter2
