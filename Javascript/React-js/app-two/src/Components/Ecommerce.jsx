import React from 'react'
import { useSelector } from 'react-redux'


const Ecommerce = () => {
    const ecommerce = useSelector((state) => state.ecommerce)
    console.log(ecommerce)
    return (
        <div>
            <h1>E-commerce</h1>
            <ul>
                {ecommerce.map((ecommerce) => {
                    return <li>{ecommerce}</li>
                })}
            </ul>

        </div>
    )
}

export default Ecommerce
