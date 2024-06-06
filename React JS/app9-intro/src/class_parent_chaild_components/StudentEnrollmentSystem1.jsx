import { Component } from "react";
import { Person_Child } from "./Person_Child";


export class StudentEnrollmentSystem extends Component {

    state = {
        persons: [
            {
                id: 1,
                email: "zxcvbnmlkjhgfdswrtyuio",
                contact: 1234567890,
            },

            {
                name:"nethaji"
            }
        ],
    };

    render() {
        return <div>
            {this.state.persons.map((person) => {
                return (
                    <Person_Child newperson={person} />
                )
            })}
        </div>
    }
}

