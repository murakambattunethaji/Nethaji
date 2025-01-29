import React from 'react'
import { useSelector } from 'react-redux'

const Cartmanagement = () => {
    const cartmanagement = useSelector((state) => state.cartmanagement)
    console.log(cartmanagement)
    return (
        <div>
            <h1>Cartmanagement</h1>
            <ul>
             {cartmanagement.map((cartmanagements)=>{
                 return <li>{cartmanagements}</li>
             })}
            </ul>

        </div>
    )
}

export default Cartmanagement
