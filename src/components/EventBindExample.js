import React, { Component } from 'react'

 class EventBindExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello How are you?'
        }
       // this.clickMe=this.clickMe.bind(this)
    }
    /* clickMe(){
        this.setState({
            message:'Fine'
        }) 
        console.log(this)
    } */
    clickMe=()=>{
        this.setState({
            message:'I am fine!!!!'
        })
    }
    render() {
        return (
            <div>
                <div><h1>{this.state.message}</h1></div>
                {/* <button onClick={this.clickMe}>Click</button> */} 
               {/* <button onClick={this.clickMe.bind(this)}>Click</button> */} 
              {/*  <button onClick={()=>this.clickMe() /* it will calling and return value thats y we use () to method *>Click</button>  */}
              <button onClick={this.clickMe}>Click</button>
            </div>
        )
    }
}

export default EventBindExample



/* //4 approches to use bind()
1.binding in render()- it is work fine every update state to render component.this internal generate new event on every render althougth impact on performance is not in small applicationCache. it will be impact on large application and component that contain nested children component  
2. arrow function in render()- simply calling event handling in arrow function body.it is also similar to 1 approch and performance impact in large application
3.binding in class constructor or binding event handler in constructor -this approch used in most of cases and it is also  this approch in the offical ract documentation. this approch deal with binding the event handler in the constructor that oppose to binding in render()
4.it is use arrow function as a class property OR CLASS property as arrow function. bascially change way to define your method in class 

react doc suggest to use approch 3 or 4. approch 3 which is binding in the constructor is best option however create react app best suppot class property approch .approch 4 is till experimental feature
*/  