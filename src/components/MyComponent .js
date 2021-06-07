import React from 'react';
import MyHOC from './MyHOC'

class MyComponent extends React.Component {
   render() {
       console.log("MyComponent...");
      return (
         <div>
            <h1>{this.props.data}</h1>
            <h1>{this.props.name}</h1>
            <h1>{this.props.add}</h1>
         </div>
      )
   }
}

export default MyHOC(MyComponent,11,7);