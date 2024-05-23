import { useState } from "react"


export var FlightBookingSystem=()=>{

    var [FlightBookingSystem]=useState(
        {
            flightnumber:"123456",
            departurecity:"chennai",
            arrivalcity:"bangalore",
            departuretime:"2hrs",
            bookflights:function(){},
            cancelflights:function(){},
            checkavailability:function(){},
        }
    )

    return <div>
        <h1>Flight Booking System</h1>
        <ul>
            {Object.keys(FlightBookingSystem).map((key)=>{
                return <li>{FlightBookingSystem[key]}</li>
            })}

        </ul>
    </div>
}