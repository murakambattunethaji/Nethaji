import React, { useState } from 'react'

const Clickcounter = ({count,handleincrement}) => {
   
    return (
        <div>
            <br />
            <button onClick={handleincrement} className='btn btn-primary'>Click me</button>
            <br /><br />
            <h1>You Clicked  {count}  Times</h1>
        </div>
    )
}

export default Clickcounter
