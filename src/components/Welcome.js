
// class Component
import React,{Component} from 'react'
 class Welcome extends Component //make class as react Component to extends Component
 { 
   /*   render()// it return null or html code 
     {
         return(
             <h2> welcome class Component</h2>
         );
     } */
     render()// it return null or html code 
     {
        //this.props.name="Ram"; //props are immutale 
         return(
             <h2> welcome {this.props.name} a.k.a {this.props.heroName}</h2>
         );
     }

 }
 export default Welcome // to register class in root Component app.js file 
