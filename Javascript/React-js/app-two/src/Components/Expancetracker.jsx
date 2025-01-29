import React from 'react'
import { useSelector } from 'react-redux'

const Expancetracker = () => {
    const expancetracker = useSelector((state) => state.expancetracker)
    console.log(expancetracker)
    return (
        <div>
            <h1>Expancetracker</h1>
            <ul>
                {expancetracker.map((expancetracker) => {
                    return <li>
                        {expancetracker}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Expancetracker
