import { Component } from "react";
import { Person_Child } from "./Person_Child";


export class StudentEnrollmentSystem extends Component {

    state = {
        persons: [
            {
                id: 10,
                email: "mnethaji838@gmail.com",
                contact: 7075806584,
                name: "nethaji",
                course: "Bsc"
            },

            {
                id: 11,
                email: "mnethaji838@gmail.com",
                contact: 7075806584,
                name: "nethaji",
                course: "Bsc"
            },


        ],
    };

    addperson = () => {
        var newstate = { ...this.state }
        newstate.persons.push(
            {
                id: 12,
                email: "mnethaji838@gmail.com",
                contact: 7075806584,
                name: "Nethaji",
                course: "Bsc"
            }
        )
        this.setState(newstate)
    }

    deleteperson = (i) => {
        console.log("deleteperson colled !!!", i)
        var newstate={...this.state}
        newstate.persons.splice(i,1)
        this.setState(newstate)

    }

    render() {
        return (
            <div>
                <button onClick={this.addperson}>add person</button>
                {this.state.persons.map((person, i) => {
                    return (
                        <Person_Child newperson={person} key={i} handle={this.deleteperson} index={i} />
                    )
                })}
            </div>
        )
    }
}

