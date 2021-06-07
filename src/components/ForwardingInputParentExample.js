import React, { Component } from 'react'
import ForwardingInputExample from './ForwardingInputExample';
export class ForwardingInputParentExample extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
      }    
      clickHandler = () => {
        this.inputRef.current.focus()
      }
            render() {
            return (
                <div>
            <ForwardingInputExample ref={this.inputRef} />
            <button onClick={this.clickHandler}>Focus Input</button>
                </div>
            )
        }}

export default ForwardingInputParentExample
