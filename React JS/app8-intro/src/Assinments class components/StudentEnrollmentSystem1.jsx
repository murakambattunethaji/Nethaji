import { Component } from "react";



export class StudentEnrollmentSystem1 extends Component {


    state = {
        studentid: 123,
        studentname: {
            fname: "nethaji",
            lname: "m",
            email: "mnethaji838@gmail.com"
        },
        students: ["sss", "nnn", "kkk"],


        courseenrolled: [],
    }

    addnewstd = () => {
        var newstate = { ...this.state }
        newstate.students.push("ggg")
        this.setState(newstate)
    }
    removestd = () => {
        var newstate = { ...this.state }
        newstate.students.pop()
        this.setState(newstate)
    }
    updatestd = () => {
        var newstate = { ...this.state }
        newstate.students.splice(3, 0, "zzz")
        this.setState(newstate)
    }


    render() {
        return <div>
            <button onClick={this.addnewstd}>addnewstd</button>
            <br /><br />

            <button onClick={this.removestd}>removestd</button>
            <br /><br />
            <button onClick={this.updatestd}>updatestd</button>
            <ul>
                {this.state.students.map((val) => <li>{val}</li>)}
            </ul>

        </div>
    }
}