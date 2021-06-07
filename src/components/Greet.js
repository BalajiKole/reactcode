import React from 'react'
/* functional component */

/* function Greet(){
    return <h1>Hello TQPP</h1>
}
 */
//use Es6 =>
/* const Greet=()=><h1> Hello TQ</h1>

export default Greet; */

//export const Greet=()=><h1> Hello TQ</h1>

//export default Greet;

// use props 
 const Greet=(props /* give any name */)=>{
 console.log(props);
   // return <h1> Hello TQ</h1>
   // we can write multiple line then us return() else use return for single line
   // jsx we have should contain only one wrapper element then use is block tag div etc this is limitation it return only one element
   return(
       <div> 
    <h1> Hello {props.name} also known as {props.heroName}</h1> {/* a.k.a= also know as, {} is jsx expression use for dispaly actual value on browser */}

    { props.children}
    </div>
    )
}

 export default Greet;