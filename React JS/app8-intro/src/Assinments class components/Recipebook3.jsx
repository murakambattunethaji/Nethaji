import { Component } from "react";


export class Recipebook extends Component{

    state={
        users:["chicken","mutton"]
    }
    addnewrecipe=()=>{
        var newstate={...this.state}
        newstate.users.push("mutton chuka")
        this.setState(newstate)
    }

    render(){
        return <div>
            <button pn onClick={this.addnewrecipe}>addnewrecipe</button>

            <ul>
                {this.state.users.map((val)=> <li>{val}</li> )}
            </ul>
        </div>
    }
}