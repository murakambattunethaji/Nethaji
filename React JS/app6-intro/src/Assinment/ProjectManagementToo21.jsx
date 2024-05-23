import { useState } from "react"


export var ProjectManagementToo=()=>{

    var [ProjectManagementToo]=useState(
        {
            projectname:"dam",
            description:"working",
            teammembers:"4 batch",
            deadlines:"12345",
            createprojects:function(){},
            assigntasks:function(){},
            trackprogress:function(){},
        }
    )

    return <div>
        <h1>Project Management Tool</h1>

        <ul>
            {Object.keys(ProjectManagementToo).map((key)=>{
                return <li>{ProjectManagementToo[key]}</li>
            })}
        </ul>
    </div>
}