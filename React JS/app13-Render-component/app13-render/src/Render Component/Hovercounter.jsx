import React, { useState } from 'react'

const Hovercounter = ({count,handleincrement}) => {
   
    return (
        <div>
            <br />
            <button onMouseOver={handleincrement} className='btn btn-primary'>Hover me</button>
            <br /><br />
            <h1>You Hovered {count} Times</h1>
        </div>
    )
}

export default Hovercounter
