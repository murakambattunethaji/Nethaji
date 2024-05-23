import { useState } from "react"


export var HotelReservationSystem=()=>{

    var [HotelReservationSystem]=useState(
        {
            roomnumber:101,
            guestname:"qwertyuiop",
            checkindate:109876,
            checkoutdate:12345,
            reservations:function(){},
            cancelreservations:function(){},
            checkavailability:function(){},

        }
    )

    return <div>
        <h1>Hotel Reservation System</h1>
        <ul>
            {Object.keys(HotelReservationSystem).map((key)=>{
                return <li>{HotelReservationSystem[key]}</li>
            })}
        </ul>
    </div>
}