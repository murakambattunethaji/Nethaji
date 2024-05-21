import { useState } from "react"


export var MovieDatabase = () => {

    var [MovieDatabase] = useState(
        {
            movietitle:"RRR",
            director:"	S. S. Rajamouli",
            releaseyear:2022,
            newmovie:function(){},
            removemovies:function(){},
            searchformoviesbydirector:function(){},

        }
    )

    return <div>
        <h1>Movie Database</h1>
        <ul>
            {Object.keys(MovieDatabase).map((key)=>{
                return <li>{MovieDatabase[key]}</li>
            })}
        </ul>
    </div>
}