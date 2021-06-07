import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentMessage: 'I am  Jay'
        }
        this.displayParent = this.displayParent.bind(this)
    }
    displayParent(city) //receive data  from child comp
    {
        // alert("Hello"+ this.state.parentMessage)
        alert(`Hello ${this.state.parentMessage} from ${city}`)//use ES6 feature Template Literals 
    }
    render() {
        return (
            <div className="App App-header">
                <ChildComponent displayHandler={this.displayParent} /> {/* pass data parent to child */}
            
            </div>
        )
    }
}

export default ParentComponent
