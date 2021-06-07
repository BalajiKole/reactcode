import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
class LifecycleA extends Component {
    constructor(props) {
        super(props)
            this.state = {
             name:"Jay"
        }
        console.log('LifecycleA constructor called')
    }
  static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleA getDerivedStateFromProps called')
        return null;
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount called')
    }
    render() {
        console.log('LifecycleA render called')
        return (<div><div><h1>LifecycleA</h1></div>  <LifecycleB/></div>)
    }
}
export default LifecycleA
