import React, { Component } from 'react'
class LifecycleB extends Component {
    constructor(props) {
        super(props)
            this.state = {
             name:"Jay"
        }
        console.log('LifecycleB constructor called')
    }
  static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleB getDerivedStateFromProps called')
        return null;
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount called')
    }
    render() {
        console.log('LifecycleB render called')
       return (<div><h1>LifecycleB</h1></div>)
    }
}
export default LifecycleB
