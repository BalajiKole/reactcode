 // first Approch
 import React, { Component } from 'react'
export class RefsExample extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef() 
         }
    componentDidMount(){
        console.log(this.inputRef);
        
        this.inputRef.current.focus()  
    }
clickHandler=()=>{
    alert(this.inputRef.current.value)
}
    render() {
        return (
            <div>
                <input ref={this.inputRef} /> 
                <button onClick={this.clickHandler}>click me</button>
            </div>   )
    }}
export default RefsExample  
 

/* 
step 1:  this.inputRef=React.createRef() // initialize "this.InputRef" 
step 2: <input ref={this.inputRef} /> // pass "this.InputRef" as prop i.e. attach element to object
step 3:  this.inputRef.current  holds the reference to the DOM node
           this.inputRef.current.focus()-focus() is js method
*/
 
// second approch is callback Refs
/* import React, { Component } from 'react'
export class RefsExample extends Component {
    constructor(props) {
        super(props)
        this.cbRefs=null
    this.setCbRefs=ele=>{
        this.cbRefs=ele
    }
         }
    componentDidMount(){
      if(this.cbRefs){this.cbRefs.focus() }  
    }
clickHandler=()=>{alert(this.cbRefs.value)}
    render() {
        return (
            <div>
                <input ref={this.setCbRefs} /> 
                <button onClick={this.clickHandler}>click me</button>
            </div>   )
    }}
export default RefsExample */