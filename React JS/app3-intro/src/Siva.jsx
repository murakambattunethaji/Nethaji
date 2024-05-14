import { useState } from "react"


export const Siva = () => {
    const [myName] = useState("nethaji")
    const [person]=useState({
        fname:"nethaji",
        lname:"surya"
    })

    var [users] = useState(["hi","hello","how are you"])
   


    return <div>
        <h2> hi welcome to {myName} condition  !!!!</h2>

        <ul>
            <li>{person.fname}</li>
            <li>{person.lname}</li>
        </ul>

       <ul>
        {users.map(function(usr){
            return <li>{usr}</li>
        })}
       </ul>
    </div>

        
    
}

export default Siva

