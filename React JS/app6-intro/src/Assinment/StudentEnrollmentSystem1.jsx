import { useState } from "react"

export var StudentEnrollmentSystem = () => {
    var [StudentEnrollmentSystem] = useState(
        {
            student_id: 12345,
            name: "nethaji",
            curserenrolled: 'frent end',
            addnewstudents: function () { },
            removestudent: function () { },
            updatecourseenrollmen: function () { }
        }
    )

    return <div>
        <h1>Student Enrollment System</h1>
        <ul>
            {Object.keys(StudentEnrollmentSystem).map((key)=>{
                  return <li>{StudentEnrollmentSystem[key]}</li>
            })}
        </ul>
    </div>
}

export default StudentEnrollmentSystem