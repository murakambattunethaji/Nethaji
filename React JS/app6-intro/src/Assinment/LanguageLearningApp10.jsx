import { useState } from "react"


export var LanguageLearningApp=()=>{

    var [LanguageLearningApp]=useState(
        {
            vocabularywords:"sentance",
            definitions:"theory",
            examplesentences:"poem",
            newwords:function(){},
            removewords:function(){},
            testvocabularyknowledge:function(){},

        }
    )

    return <div>
        <h1>Language Learning App</h1>
        <ul>
            {Object.keys(LanguageLearningApp).map((key)=>{
                return <li>{LanguageLearningApp[key]}</li>
            })}
        </ul>
    </div>
}