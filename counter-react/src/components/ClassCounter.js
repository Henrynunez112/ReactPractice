import React, { Component } from 'react'


//first step is to create a class component
class ClassCounter extends Component {
    constructor(props){
        super(props)
        //second is to set a stat4
        this.state = {
            count : 0
        }
    }

    incrementCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
