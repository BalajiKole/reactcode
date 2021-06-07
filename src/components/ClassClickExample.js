import React, { Component } from 'react'

class ClassClickExample extends Component {
    clickMe(){
        console.log("click Button")
        alert("Hello React")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click-Me</button>
            </div>
        )
    }
}

export default ClassClickExample
