import React, { Component } from 'react'
const A=(B)=>{
    class myClass extends Component{
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
        render(){
             return   <B count={this.state.count} counterIncrement={this.counterIncrement}/>
        }
    }
    return myClass
}
export default A;