import React, { Component } from 'react'
class StateExample extends Component {
    // step: 1. cretate state object and initialization it in constructor
// 2. call super()in constructor
//3.is to bind state value in the render() it is similar to props
//4.add button in html 
//5.To listen click event on button to change message
    constructor(){
        super();//this is required because we extends react component calss and call has to made to the base component constructor
        this.state={
                message:'welcome visitor'
        } // state is reserved keyword in react. we decalre this.state reatct understand your intenation 

}
   /*  render() {
        return (
            <h1> welcome visitor</h1>
        )
    } */

    changeMessage(){
        this.setState({
            message:'Thank you for visiting '
        })//this method accept an object which is nothing but new state of component  
    }


    render() {
        return ( 
            <div>
            <h1> {this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button> {/* events are camelcase to handle to event using handler use {} */}
            </div>
        )
    }

}

export default StateExample;