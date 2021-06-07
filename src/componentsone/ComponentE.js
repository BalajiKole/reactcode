import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext';



/* export class ComponentE extends Component {
   
	render() {
		return (
			<div>
              
				<ComponentF />
			</div>
		)
	}
}

export default ComponentE */

//  use contextType
export class ComponentE extends Component {
   static contextType=UserContext // use public
	render() {
		return (
			<div>
                componentE context {this.context}
				<ComponentF />
			</div>
		)
	}
}
//ComponentE.contextType=UserContext
export default ComponentE
// this is much simpler than consumer in componentF
//contextType is 2 limitation 1. it only work with class component 2. it only subscribe to a single context using contextType in your applicatoin we need to read more than one context in which case consumer component is good */