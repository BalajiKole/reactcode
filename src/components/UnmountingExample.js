import React, { Component } from 'react'
export class UnmountingExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    delHeader = () => {
        this.setState({ show: false });
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}
export default UnmountingExample
class Child extends Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
      console.log("child component unmounted..")
    }
    render() {
      return (
        <h1>Hello Java!</h1>
      );
    }
  }