import { useState } from "react"


export var RecipeGenerator=()=>{

    var [RecipeGenerator]=useState(
        {
            ingredients:"qwertyu",
            instructions:"asdfgh",
            newrecipes:function(){},
            preferences:function(){},
        }
    )

    return <div>
        <h1>Recipe Generator</h1>

        <ul>
            {Object.keys(RecipeGenerator).map((key)=>{
                return <li>{RecipeGenerator[key]}</li>
            })}
        </ul>
    </div>
}