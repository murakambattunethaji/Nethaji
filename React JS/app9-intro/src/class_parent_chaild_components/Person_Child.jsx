import { Component } from "react";
import  './person.css'


export class Person_Child extends Component {
    render (){
        console.log(this.props)
        const {newperson}=this.props;

        return(
            <div>
                
                <ul>
                    <li>{newperson.id}</li>
                    <li>{newperson.email}</li>
                    <li>{newperson.contact}</li>
                </ul>
                 
                <ul>
                    <li>{newperson.name}</li>
                </ul>
            </div>
        );
        
    }
}