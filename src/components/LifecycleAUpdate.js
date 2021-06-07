import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
class LifecycleAUpdate extends Component {
    constructor(props) {
        super(props)
            this.state = {
             name:"Jay"
        }
        console.log('LifecycleAUpdate constructor called')
    }
  static getDerivedStateFromProps(Props, State) {
        console.log('LifecycleAUpdate getDerivedStateFromProps called')
        return null;
    }
    componentDidMount(){
        console.log('LifecycleAUpdate componentDidMount called')
    }
    shouldComponentUpdate(){
        console.log('LifecycleAUpdate shouldComponentUpdate called')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleAUpdate getSnapshotBeforeUpdate called')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleAUpdate componentDidUpdate called')
    }
    changeState=()=>{
        this.setState({
            name:"TQPP"
        })
    }
    render() {
        console.log('LifecycleAUpdate render called')
        return (<div><div><h1>LifecycleAUpdate</h1></div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeState}>change value</button>
        </div>)
    }
}
export default LifecycleAUpdate
