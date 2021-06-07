import React, { Component } from 'react'
export class InputExample extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
      }    
      focusInput() {
        this.inputRef.current.focus()
      }
       render() {
        return (<div>
          <input type="text" ref={this.inputRef}></input>
         {/*  <input type="text" ref={this.inputRef}></input>
          <input type="text" ></input> */}
          </div>
        )
      }}
export default InputExample
