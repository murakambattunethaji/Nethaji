import { useState } from "react"


export var RecipeBook = () => {
    var [RecipeBook] = useState(
        {
            recipe_name:"chicken curry",
            ingredients:"chicken masala",
            instructions:function(){},
            newrecipes:function(){},
            removerecipes:function(){},
            searchforrecipesbyingredients:function(){},
        }
    )

    return <div>
        <h1>Recipe Book</h1>
        <ul>
            {Object.keys(RecipeBook).map((key)=>{
                return <li>{RecipeBook[key]}</li>
            })}
        </ul>
    </div>
}

export default RecipeBook