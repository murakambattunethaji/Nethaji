import React from 'react'

const Hovercounter2 = ({count,handleincrease}) => {
   
  return (
    <div>
      <button type='button' onMouseOver={handleincrease} className='btn btn-danger'>Hover me </button>
      <br /><br />
      <h2>Hover Counter {count} Times</h2>
      <hr />
    </div>
  )
}

export default Hovercounter2
