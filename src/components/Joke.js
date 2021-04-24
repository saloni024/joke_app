import React from "react"

function Joke(props){
    if(!props.question){
        return(
            <div>
                <p>{props.answer}</p>
                <hr></hr>
            </div>
        )
    }
    return(
        <div>
            <p>Question: {props.question}</p>
            <p>Answer: {props.answer}</p>
            <hr></hr>
        </div>
    )
}

export default Joke