import { useState } from "react"


export var EmployeeTimeTracker=()=>{

    var [EmployeeTimeTracker]=useState(
        {
            employeename:"asdfghjkl",
            date:"12345",
            starttime:"12345",
            endtime:"123",
            clockin:function(){},
            clockout:function(){},
            calculatetotalhoursworked:function(){},
        }
    )

    return <div>
    
    <h1>Employee Time Tracker</h1>

    <ul>
        {Object.keys(EmployeeTimeTracker).map((key)=>{
            return <li>{EmployeeTimeTracker[key]}</li>
        })}
    </ul>
    </div>
}