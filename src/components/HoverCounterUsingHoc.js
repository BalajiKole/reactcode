import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
export class HoverCounterUsingHoc extends Component {
   
    render() {
        const {count,counterIncrement}=this.props
        return (
            <div>
                <h1 onMouseOver={counterIncrement}> Clicked {count} times</h1>
            </div>
        )
    }
}
export default UpdatedComponent(HoverCounterUsingHoc,1)
