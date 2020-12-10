import React from "react"
import { Button } from "semantic-ui-react"

class CounterClass extends React.Component{
    state = {
        counter: 0,
        message: "Hello"
    }

    componentDidMount = () => {
        console.log("mounted")
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Previous State: ", prevState)
        console.log("State: ", this.state)
        
        
        if (prevState.counter === 9){
            this.setState({message: "you've reached 10"})
        } 
    }

    addAKid = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render = () => {
        return (
            <>
                <h1>Counter</h1>
                <Button onClick = {this.state.counter < 10 ? this.addAKid : undefined}>Add a kid?</Button>
                <div>The Number of Kids I want: {this.state.counter}</div>
                <p>{this.state.message}</p> 
            </>
        )
    }
}

export default CounterClass