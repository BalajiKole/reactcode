import React from 'react'

function FunctionalClickExample() {
    function clickMe(){
        console.log("Button click")
        alert("Welcome to TQPP")
    }
    return (
        <div>
            <button onClick={clickMe /* dont write clickMe() then it will be funcation callback */}> Click me</button>
     {/* define function within function 
      dont write onclik="clickMe"
        Use camelCase to write event e.g. onClick
        method name provied without () bracket i.e handler otherwise it is render first
        clickMe is handler function and clickme() is function callback */}
        </div>
    )
}

export default FunctionalClickExample
