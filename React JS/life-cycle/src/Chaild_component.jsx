import { Component } from "react";


export class Child_component extends Component{

    constructor(){
        super()
        console.log("Child_component constructor called !!!")
        this.state={
            message:""
        }
    }

    static getDerivedStateFromProps(){
        console.log("Child_component getDerivedStateFromProps called !!!")
        return {}

    }

    shouldComponentUpdate(){
        console.log("Child_component shouldComponentUpdate called !!!")
        return true

    }

    componentDidUpdate(){
        console.log("Child_component componentDidUpdate called !!!")

    }
    render(){
        console.log("Child_component render called !!!")

        return(
            <div>
                <h2>{this.props.msg}</h2>
            </div>
        )
    }
}