import { useState } from "react"


export var TaskTracker = () => {

    var [TaskTracker] = useState(
        {
            taskname: "Running",
            duedate: "05-06-2025",
            priority: "etrsydlufiguoi",
            addtasks: function () { },
            marktasksascomplete: function () { },
            filtertasksbypriority: function () { },
        }
    )

    return <div>
        <h1>Task Tracker</h1>

        <ul>
            {Object.keys(TaskTracker).map((key)=>{
                return <li>{TaskTracker[key]}</li>
            })}
        </ul>
    </div>
}