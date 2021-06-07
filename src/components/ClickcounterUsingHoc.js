/*  import React from 'react';
import UpdatedComponent from './WithCounter'

class ClickcounterUsingHoc extends React.Component {
   
   render() {
       const {count,counterIncrement}=this.props // destructure props and use below
      return (
         <div>
             {/* <h1>{this.props.data}</h1>  
            <button onClick={counterIncrement}>Clicked {count} times</button>
         </div>
      )
   }
}

export default UpdatedComponent(ClickcounterUsingHoc);  */

 //Passing paramter
import React from 'react';
import UpdatedComponent from './WithCounter'

class ClickcounterUsingHoc extends React.Component {
   
   render() {
       const {count,counterIncrement}=this.props 
      return (
         <div>
             <h1>{this.props.name}</h1> 
            <button onClick={counterIncrement}>{this.props.name} Clicked {count} times</button>
         </div>
      )
   }
}

export default UpdatedComponent(ClickcounterUsingHoc, 5); 