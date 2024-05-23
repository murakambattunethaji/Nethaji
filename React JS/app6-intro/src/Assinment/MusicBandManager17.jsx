import { useState } from "react"


export var MusicBandManager=()=>{

    var [MusicBandManager]=useState(
        {
            bandmembers:"15",
            upcominggigs:"drumms",
            setlist:"asdfgh",
            addmembers:function(){},
            schedulegigs:function(){},
            updatethesetlist:function(){},

        }
    )

    return <div>
        <h1>Music Band Manager</h1>

        <ul>
            {Object.keys(MusicBandManager).map((key)=>{
                return <li>{MusicBandManager[key]}</li>
            })}
        </ul>
    </div>
}