import React, { Component } from 'react'

export class DestructureExampleWithClassComponent extends Component {
    render() {
        const {name,ClassName}=this.props
        return (
            <div>
                 <h1> welcome {name} in {ClassName}</h1>
            </div>
        )
    }
}

export default DestructureExampleWithClassComponent
