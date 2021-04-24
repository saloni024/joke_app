import React from "react"
import Joke from "./Joke"
import jokeData from "./JokeData"

function App(){
    const jokeComponents = jokeData.map( function makeArray(joke){
        return <Joke key={joke.id} question={joke.question} answer={joke.answer} />
    })
    return(
        <div>
            <h3>Jokes :)</h3>
            {jokeComponents}
        </div>
    )
}

export default App