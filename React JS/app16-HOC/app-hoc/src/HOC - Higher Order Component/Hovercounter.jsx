import React from 'react'
import { useState } from 'react'
import HOC_component from './HOC_component'

const Hovercounter = (props) => {
    const { user, increase, decress } = props
    return (
        <div>
            <br />
            <hr />
            <h1>hover in {user} times</h1>
            <button className='btn btn-primary' onMouseOver={increase}> hover me increase</button> <br /><br />
            <button className='btn btn-danger' onMouseOut={decress}>hover me in decress</button>

        </div>
    )
}

export default HOC_component(Hovercounter)
