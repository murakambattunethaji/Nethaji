import React from 'react'
import { useSelector } from 'react-redux'

const Onlinequizapp = () => {
    const onlinequizapp = useSelector((state) => state.onlinequizapp)
    console.log(onlinequizapp)
    return (
        <div>
            <h1>Online Quiz App</h1>
            <ul>
                {onlinequizapp.map((onlinequizapp) => {
                    return <li>
                        {onlinequizapp}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Onlinequizapp
