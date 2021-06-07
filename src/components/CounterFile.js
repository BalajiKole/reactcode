import React, { Component } from 'react'

class CounterFile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    /* increment(){
       // this.state.count=this.state.count+1;
       this.setState({
           count:this.state.count+1
       })
        console.log(this.state.count);
    }
        render() {
            return (
                <div>
                   <div> count- {this.state.count}</div> 
                    <button onClick={()=>this.increment()}>Increment Counter </button>
                </div>
            )
        }
    } */
    /* // 1st scenario
    increment(){
        
        this.setState({
             count:this.state.count+1
            },
            ()=>{console.log("callback value",this.state.count)})
         console.log(this.state.count);// send vlaue synchronous
     }
         render() {
             return (
                 <div>
                    <div> count- {this.state.count}</div> 
                     <button onClick={()=>this.increment()}>Increment Counter </button>
                 </div>
             )
         }
     } */

    // 2nd scenario complex create method call 5 times understand proper setstate()
    increment() {
        /*   
          this.setState({
               count:this.state.count+1
              },
              ()=>{console.log("callback value",this.state.count)}) */

        this.setState((prevState, props) => ({
            //  count:prevState.count+props.value
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }
    render() {
        return (
            <div>
                <div> count- {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment Counter </button>
            </div>
        )
    }
}

export default CounterFile
