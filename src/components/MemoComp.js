    //rfce
import React from 'react'

function MemoComp({name}/* destructure */) {
    console.log("Rendering memo component")
    return (
        <div>
           <h1> Memo component  {name}</h1>
        </div>
    )
}

export default React.memo(MemoComp)
//Memo- memoization
//please check version  in package.json file of "react": "^16.6.0","react-dom": "^16.6.0" or greater 
//  something call higher order components. React.memo()- accepts a component add some things to that component and returns new enhanced component
// our case component capable of avoiding re-render when there is no changes in props  