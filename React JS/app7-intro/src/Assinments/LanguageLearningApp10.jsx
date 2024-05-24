import { Component } from "react";


class LanguageLearningApp  extends Component{

    state={
        vocabularywords:"meaning",
        definitions:"asdfgh",
        examplesentences:"dsfuryuiuyzosyuc",
    }

    render(){
        return <div>
            <h1>Language Learning App</h1>
            <p>{this.state. vocabularywords}</p>
            <p>{this.state.definitions}</p>
            <p>{this.state. examplesentences}</p>
        </div>
    }
}

export default LanguageLearningApp