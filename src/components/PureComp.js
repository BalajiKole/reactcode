//rpce implements PureComponent
import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
    render() {
        console.log("pure component render")
        return (
            <div>
              <h1>  Pure Component  {this.props.name} </h1> {/* we are dealing with primitive and props thats pure component will be not update every time */}
            </div>
        )
    }
}

export default PureComp
