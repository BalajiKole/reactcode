import React from 'react'
// functional component 
/* //1.Destructure in functional paramter itself 
const DestructureExample =({name,heroName} /* Destructuring {} basically name and heroname extract from props object )=> {
    return(
            <div>
          <h1> Hi {name} as know as {heroName}</h1>      
            </div>
        )
    
} */

//2.Destructure in the functional body 
const DestructureExample =(props)=> {
    const {name,heroName}=props
    return(
            <div>
          <h1> Hi {name} as know as {heroName}</h1>      
            </div>
        )
    
}
export default DestructureExample
