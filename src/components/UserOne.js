import React, { Component } from 'react'

 class UserOne extends Component {
    render() {
        return (
            <div>
            {/*   {this.props.name}  */} 
             {/*   Name: {this.props.obj.name}  */}
         {/*     Name: {this.props.name} */}
             {/* Age: {this.props.age} */}
           
             {this.props.name()} 
            </div>
        ) 
        /* if(this.props.displayName) {
            return (
                <div>
                    DisplayName: {this.props.displayName}
                </div>
            )
        } else {
            return (
                <div>
                    Don't Display Name
                </div>
            )
        } */
    }
}

export default UserOne
