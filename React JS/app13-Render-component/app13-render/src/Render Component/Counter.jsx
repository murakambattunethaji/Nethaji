import React, { useState } from 'react'

const Counter = (props) => {


    console.log(props)
    return (
        <div>
            {props.render}
        </div>
    )
}

export default Counter
