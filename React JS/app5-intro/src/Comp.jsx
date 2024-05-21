import { useState } from "react"


export var Condition=()=>{

    var [names]=useState("nethaji")
     return <div>
       <h1>{names}</h1>
     </div>
}
export default Condition