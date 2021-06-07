import React, { Component } from 'react'
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  render() {
    return (
      <div>
           
         <h1> {this.props.render(this.state.count, this.incrementCount)} </h1>  
         {/* {this.props.children(this.state.count, this.incrementCount)}  */}  
      </div>
    ) }}

export default Counter

// counter comp basically telling take count and  incrementCount and  render what you want to  i will handle regading counter logic you warried about what you render