import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div>
                 {this.props.render(false)} <br/> 
               {/*  <h1> {this.props.name(true)} </h1><br/>   */}
              {/*  <h1> {this.props.name()} </h1>*/}
               {/* <h1>  {this.props.name()}  </h1> */} 
            </div>
        )
    }
}

export default User

// keep in mind react it is possible to use prop whose value is funcation to control what is actual render by a component 