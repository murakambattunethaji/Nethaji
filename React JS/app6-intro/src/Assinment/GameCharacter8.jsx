import { useState } from "react"

export var GameCharacte=()=>{

    var [GameCharacte]=useState(
        {
            name:"nethaji",
            level:"level 56",
            healthpoints:"hp 200",
            attack:function(){},
            defend:function(){},
            levelup:function(){},
        }
    )

    return <div>
        <h1>Game Characte</h1>
        <ul>
            {Object.keys(GameCharacte).map((key)=>{
                return <li>{GameCharacte[key]}</li>
            })}
        </ul>
    </div>
}