import { useState } from "react"

export var ChatApplication=()=>{

    var [ChatApplication]=useState(
        {
            sender:"Nethaji",
            receiver:"Vijay",
            message:"Hi",
            sendmessages:function(){},
            deletemessages:function(){},
            searchformessages:function(){},
        }
    )

    return <div>
        <h1>Chat Application</h1>
        <ul>
            {Object.keys(ChatApplication).map((key)=>{
                return <li>{ChatApplication[key]}</li>
            })}
        </ul>
    </div>
}