import React from 'react'
import { useSelector } from 'react-redux'

const Digitaladdressbook = () => {
    const digitaladdressbook = useSelector((state) => state.digitaladdressbook)
    console.log(digitaladdressbook)
    return (
        <div>
            <h1>Digitaladdressbook</h1>
            <ul>
             {digitaladdressbook.map((digitaladdressbook)=>{
                 return <li>{digitaladdressbook}</li>
             })}
            </ul>

        </div>
    )
}

export default Digitaladdressbook
