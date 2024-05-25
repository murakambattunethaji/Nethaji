import { Component } from "react";


class LanguageLearningApp extends Component {

    state = {
        vocabularywords: "meaning",
        definitions: "asdfgh",
        examplesentences: "dsfuryuiuyzosyuc",
        person: {
            fname: "vijay",
            lname: "ram"
        }
    }


    render() {
        return <div>
            <h1>Language Learning App</h1>
            <p>{this.state.vocabularywords}</p>
            <p>{this.state.definitions}</p>
            <p>{this.state.examplesentences}</p>
            <p>{this.state.person.fname}</p>
            <p>{this.state.person.lname}</p>
        </div>
    }
}

export default LanguageLearningApp