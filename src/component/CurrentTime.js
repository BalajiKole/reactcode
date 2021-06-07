import React, { Component } from 'react'

export class CurrentTime extends Component {
   constructor(props) {
    super(props);
 
   /*  var now = new Date();
    console.log(now) */
    this.state = {
      currentTime:new Date().toString()
    };
  }
 
  // A method of CurrentTime component
  refreshCurrentTime() {
    //var now = new Date();
    this.setState({ currentTime: new Date().toString() });
  }
  render() {
    
    return (
      <div>
        <h4>Current Time:</h4>
        <p>{this.state.currentTime}</p>
        <button onClick={() => this.refreshCurrentTime()}>
          Refresh Current Time
        </button>
      </div>
    );
  }
}

export default CurrentTime
