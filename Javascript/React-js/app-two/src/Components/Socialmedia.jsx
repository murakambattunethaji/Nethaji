import React from 'react'
import { useSelector } from 'react-redux'

const Socialmedia = () => {
    const socialmedia = useSelector((state)=> state.socialmedia )
        console.log(socialmedia)
   
    return (
        <div>
            <h1>Social Media</h1>
            <ul>
                {
                    socialmedia.map((socialmedia) => {
                        return <li>
                            {socialmedia}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Socialmedia
