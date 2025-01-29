import React from 'react'
import { useSelector } from 'react-redux'

const Moviebooking = () => {
    const moviebooking = useSelector((state) => state.moviebooking)
    console.log(moviebooking)
    return (
        <div>
            <h1>Moviebooking</h1>
            <ul>
             {moviebooking.map((moviebooking)=>{
                 return <li>{moviebooking}</li>
             })}
            </ul>

        </div>
    )
}

export default Moviebooking
