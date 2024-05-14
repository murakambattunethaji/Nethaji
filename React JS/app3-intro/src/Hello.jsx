import { useState } from "react"


export const Nethaji=()=>{
    const [users]=useState("Nethaji")
    const [persons]=useState(["Nethaji","Sai","Reddy",])
    const [details]=useState({
        fname:"Vijay",
        lname:"Dinesh"
    })




    return <div>
        <h1>Hi Welcome to {users} coponent</h1>

        
        <ul>
            {persons.map(function(person){
                return <li>{person}</li>
            })}
        </ul>

        
        <ul>
            <li>{details.fname}</li>
            <li>{details.lname}</li>
        </ul>

    </div>
}

export default Nethaji