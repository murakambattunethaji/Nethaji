import { useState } from "react"


export var PetAdoptionCenter=()=>{

    var [PetAdoptionCenter]=useState(
        {
            petname:"",
            breed:"",
            age:"",
            adoption :"",
            status:"",
            addnewpets:function(){},
            adoptpets:function(){},
            searchforavailablepets:function(){},
        }
    )

    return <div>
        <h1>Pet Adoption Center</h1>

        <ul>
            {Object.keys(PetAdoptionCenter).map((key)=>{
                return <li>{PetAdoptionCenter[key]}</li>
            })}
        </ul>
    </div>
}