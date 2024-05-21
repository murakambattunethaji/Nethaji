import { useState } from "react"

export const Name = () => {


    const [names, setname] = useState("nethaji")
    const changename = () => {
        setname("NETHAJI")
    }

    return <div>
        <button onClick={changename}>click convert in to capital letter</button>
        <h1>your name converted in to capital letter !!   {names}</h1>
         
    </div>
}

export default Name