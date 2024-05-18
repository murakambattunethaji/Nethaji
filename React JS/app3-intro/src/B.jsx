import { useState } from "react"

export const Name = () => {
    const [objname, setobj] = useState({
        fname: "nethaji",
        lname: "m"
    })

    const changeobj = () => {
        setobj({
            fname: "NETHAJI",
            lname: "M"
        })
    }

    return <div>
        <button onClick={changeobj}>change obj name in capital</button>

        <ul>
            {/* <li>{objname.fname}</li>
           <li>{objname.lname}</li> */}

            {Object.values(objname).map((val) => {
                return <li>{val}</li>
            })}
        </ul>
    </div>

}

export default Name
