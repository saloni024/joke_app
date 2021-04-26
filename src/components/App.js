import React from "react"
import Joke from "./Joke"
import jokeData from "./JokeData"
import Conditional from "./Conditional"

/*function App(){
    const jokeComponents = jokeData.map( function makeArray(joke){
        return <Joke key={joke.id} question={joke.question} answer={joke.answer} />
    })
    return(
        <div>
            <h3>Jokes :)</h3>
            {jokeComponents}
        </div>
    )
}*/

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    render(){
        const jokeComponents = jokeData.map( function makeArray(joke){
            return <Joke key={joke.id} question={joke.question} answer={joke.answer} />
        })
        return(
            <div>
                <Conditional isLoading={this.state.isLoading}/>
                <h3>Jokes :)</h3>
                {jokeComponents}
            </div>
        )
    }
}

export default App