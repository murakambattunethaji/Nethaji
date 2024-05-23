import { useState } from "react"


export var BlogPostManager=()=>{

    var [BlogPostManager]=useState(
        {
            posttitle:"asdf",
            author:"asdf",
            content:"asdf",
            tags:"asdf",
            createnewposts:function(){},
            editposts:function(){},
            deleteposts:function(){},

        }
    )

    return <div>
        <h1>Blog Post Manager</h1>
        <ul>
            {Object.keys(BlogPostManager).map((key)=>{
                return <li>{BlogPostManager[key]}</li>
            })}
        </ul>
    </div>
}