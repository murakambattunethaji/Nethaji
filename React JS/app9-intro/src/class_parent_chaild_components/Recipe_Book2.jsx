import { Component } from "react";
import { Parent_child } from "./Parent_child2";


export class Recipe_Book extends Component{

    state ={
        persons:[
            {
                id: 1,
                email: "mnethaji838@gmail.com",
                contact: 7075806584,
                name: "nethaji",
                course: "Bsc"
            },

            {
                id: 2,
                email: "mnethaji838@gmail.com",
                contact: 7075806584,
                name: "nethaji",
                course: "Bsc"
            },

            {
                id: 3,
                email: "mnethaji838@gmail.com",
                contact: 7075806584,
                name: "nethaji",
                course: "Bsc"
            },

            {
                id: 4,
                email: "mnethaji838@gmail.com",
                contact: 7075806584,
                name: "nethaji",
                course: "Bsc"
            },
        ]
    }

    adduser=()=>{
        var newstate={...this.state}
        newstate.persons.push({
            id: 5,
            email: "mnethaji838@gmail.com",
            contact: 7075806584,
            name: "nethaji",
            course: "Bsc"
        })
        this.setState(newstate)
    }


    deleteuser=(i)=>{

        var newstate={...this . state}
        newstate.persons.splice(i,1)
        this.setState(newstate)
    }



    render(){
        return(
            <div>
                <button onClick={this.adduser}>add user</button>
                {this.state.persons.map((person,i)=>{
                    return (
                        <Parent_child newperson={person} key={i} handle={this.deleteuser} index={i} />
                    )
                })}
            </div>
        )
    }
}