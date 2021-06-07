import React from 'react'

const Hello=()=>{
    // code write in  jsx
   /*  return(
         <div>
             <h1>Hello React lib</h1>
         </div>
     ); */
     // code write without jsx
  //return React.createElement('div',null,'Hello TQPP')
    //return React.createElement('div',null,React.createElement('h1',null,'Hello TQPP'))
    return React.createElement('div',
    
    {id:'hello',className:"dummyClass"}, //class name give warning in console so use className it is css properties 
    React.createElement('h1',null,'Hello TQPP'))// inspect element and check
 }
 export default Hello

 // so jsx is better than without jsx and jsx simple basically each jsx elements it just syntactically sugar for calling  React.createElement() . 
 // jsx translate into react.createElement() which intern uses react lib thats y we import react
 // react update changes look we use this link- https://github.com/facebook/react/issues/13525