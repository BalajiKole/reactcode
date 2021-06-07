import React from 'react'

const Logout = (props) => {
    return (
        <div>
             <button onClick = {props.clickHandler}> 
               <h1>Logout</h1>
           </button> 
        </div>
    )
}

export default Logout

