import { useState } from "react"


export var CalendarAppointments=()=>{

    var [CalendarAppointments]=useState(
        {
            eventname:"New year",
            date:"01-01-2025",
            time:"12 am",
            location:"chittoor",
            newappointment:function(){},
            updateappointments:function(){},
            deleteappointments:function(){},

        }
    )

    return <div>
        <h1>Calendar Appointments</h1>
        <ul>
            {Object.keys(CalendarAppointments).map((key)=>{
                  return <li>{CalendarAppointments[key]}</li>
            })}
        </ul>
    </div>
}