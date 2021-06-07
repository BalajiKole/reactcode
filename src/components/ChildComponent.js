import React from 'react'

function ChildComponent(props) {
    return (
        <div>
           {/*  <button onClick={props.displayHandler}>Display Parent</button> */} {/* receive data  from parent comp */} 
           <button onClick={()=>props.displayHandler("pune")}>Display Parent</button> {/* pass n number of parameter to parent comp */}
        </div>
    )
}

export default ChildComponent
