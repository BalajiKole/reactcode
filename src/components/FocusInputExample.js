import React, { Component } from 'react'
import InputExample from './InputExample'
export class FocusInputExample extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    clickHandler = () => { this.componentRef.current.focusInput() }
    render() {
        return (
            <div>
                <InputExample ref={this.componentRef}></InputExample>
                <button onClick={this.clickHandler}>Focus-Input</button>
            </div>
        )
    }
}
export default FocusInputExample


// some case if at all you need ref to a child component from praent component now it is possible 
// component is class component  ref can not be attched to functional component please keep in mind 