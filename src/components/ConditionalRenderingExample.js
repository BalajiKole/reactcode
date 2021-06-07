import React, { Component } from 'react'

 class ConditionalRenderingExample extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
     
    render() {

       //Short-circuit AND operator (&&)
      return this.state.isLoggedIn && <div>Welcome Jay</div>
       /* //Ternary operator
            return(
                this.state.isLoggedIn?<div>Welcome Jay</div>:<div>Welcome User</div>
            ) */

       /*  //Element variables
        let message
        if(this.state.isLoggedIn){
            message=<div>Welcome Jay</div>
        }else{
            message=<div>Welcome User</div>
        }
        return <div>{message}</div>
         */
       /*  //If/else
        if(this.state.isLoggedIn){
            return(<div>Welcome Jay</div>)
        }else{
            return(<div>Welcome User</div>)
        } */
        /* return (
            <div>
                <div>Welcome Tqpp</div>
                <div>Welcome User </div>
            </div>
        ) */
    }
}

export default ConditionalRenderingExample


// if/else donot work in jsx. jsx work with function and object constrauction.
// if/else not valid in jsx. if/else stmt write outside jsx and whole return jsx stmt  placed inside if/else block
