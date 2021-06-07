import React, { Component } from 'react'

export class Clickcounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    counterIncrement = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.counterIncrement}>Clicked {this.state.count} times</button>

            </div>
        )
    }
}

export default Clickcounter
