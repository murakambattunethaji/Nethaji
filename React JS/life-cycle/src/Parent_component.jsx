import { Component } from "react";
import { Child_component } from "./Chaild_component";


export class Parent_component extends Component{
    state={
      message:"welcome from parent comp"
    }
    render(){
        return (
            <div>
                <h1>parent component !!!</h1>
                <button onClick={()=>{this.setState({message:"message changed in parent"})}}>change message</button>
                <hr />
                <Child_component msg={this.state.message} />
            </div>
        )
    }
}
