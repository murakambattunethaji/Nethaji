import { Component } from "react";


export class Parent_child extends Component {

    render() {
        console.log(this.props)
        const { newperson } = this.props

        return (
            <div>
                <ul>
                    <li>{newperson.id}</li>
                    <li>{newperson.email}</li>
                    <li>{newperson.contact}</li>
                    <li>{newperson.name}</li>
                    <li>{newperson.course}</li>
                </ul>

                <button onClick={()=>{this.props.handle(newperson,this.props.index)}}>delete</button>
            </div>
        )
    }
}