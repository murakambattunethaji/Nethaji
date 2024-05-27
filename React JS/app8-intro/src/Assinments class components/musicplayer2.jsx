import { Component } from "react";



export class MusicPlayer extends Component {

    state = {
        currentsong: "tamil",
        playlist: "12",

        user: ["nethaji", "vijay",]
    }

    play = () => { 
        var newstate={...this.state}
        newstate.user.push("play")
        this.setState(newstate)
    }
    pause = () => {
        var newstate={...this.state}
        newstate.user.pop()
        this.setState(newstate)
     }
    skip = () => {
        var newstate={...this.state}
        newstate.user.splice(3,0,"sai")
        this.setState(newstate)
     }
    shufflesongs = () => { 
        var newstate={...this.state}
        newstate.user.splice(4,0,"reddy")
        this.setState(newstate)
    }

    render (){
        return <div>
            <button onClick={this.play}>play</button> <br /> <br />
            <button onClick={this.pause}>pause</button> <br /> <br />
            <button onClick={this.skip}>skip</button> <br /> <br />
            <button onClick={this.shufflesongs}>shufflesongs</button> <br /> <br />


            <ul>
                {this.state.user.map((val)=> <li>{val}</li> )}
            </ul>
        </div>
    }
}