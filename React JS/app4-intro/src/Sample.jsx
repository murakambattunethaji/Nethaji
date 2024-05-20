import { useState } from "react"


export const Nethaji = () => {


    var [name, setname] = useState(["NETHAJI", "REDDY", "SAI", "VIJAY", "DINESH"])

    var [objnames, setobjname] = useState({
        fname: "JESWANTH",
        lname: "JACHU"
    })



    function changename() {
        setname(["nethaji", "reddy", "sai", "vijay", "dinesh"])
    }

    var changeobj = () => {
        setobjname({
            fname: "jeswanth",
            lname: "jachu"
        })
    }
    return <div id="samples">
        <h1>click the button !! after change the names in small letters </h1>
        <br />
        <div id="left">
            <div >
                <button onClick={changename}>click</button>

                <ul>
                    {name.map(function (src) {
                        return <li>{src}</li>
                    })}
                </ul>
            </div>

            <div>
                <button onClick={changeobj}>click</button>

                <ul>
                    {Object.values(objnames).map((val) => {
                        return <li>{val}</li>
                    })}
                </ul>

            </div>
        </div>
        <br />

       
        <img src="https://wallpaperset.com/w/full/e/5/c/246537.jpg" alt="" />

    </div>
}

export default Nethaji