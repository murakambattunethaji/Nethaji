import { useState } from "react"


export var FitnessChallengeTracke=()=>{

    var [FitnessChallengeTracke]=useState(
        {
            challengename:"qwert",
            participants:"asdfg",
            startdate:"zxcvb",
            enddate:"12345",
            challenges:function(){},
            trackprogress:function(){},
            declarewinners:function(){},

        }
    )

    return <div>
        <h1>Fitness Challenge Tracke</h1>
        <ul>
            {Object.keys(FitnessChallengeTracke).map((key)=>{
                return <li>{FitnessChallengeTracke[key]}</li>
            })}
        </ul>
    </div>
}